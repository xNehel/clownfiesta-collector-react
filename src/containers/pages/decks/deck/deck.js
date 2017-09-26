import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import LeftContainer from "./left-container/left-container";
import RightContainer from "./right-container/right-container";
import {getUser} from '../../../../firebase/user/read';
import {rateDeck} from '../../../../firebase/decks/deck/read/lazyload-decks';
import {udpateDeckRating} from '../../../../firebase/decks/deck/update';
import {alertUnload} from "./utils/alert-unload";
import {FETCH_ACTIVE_DECK_REQUEST, RESET_ACTIVE_DECK} from "../../../../redux/deck/active-deck/types";
import {FETCH_DECK_AUTHOR_REQUEST} from "../../../../redux/deck/deck-author/types";

class Deck extends Component{

  componentDidMount(){
    const {activeDeck, fetchDeck, fetchDeckAuthor, params, currentDeck, updateDecklist, updateDeckAuthorDetails, editingDecklist} = this.props;
    const {deck} = currentDeck;
    const {deckId} = params;

    if(activeDeck.loading){
      fetchDeck(deckId)
    }

    // if(currentDeck){
    //   getUser(currentDeck.authorId, deckAuthor=>{
    //     const { avatar, username, rank, region, battletag, facebook, twitter, twitch, youtube, favouriteClass} = deckAuthor;
    //
    //     updateDeckAuthorDetails({
    //       avatar,
    //       username,
    //       rank,
    //       region,
    //       battletag,
    //       facebook,
    //       twitter,
    //       twitch,
    //       youtube,
    //       favouriteClass
    //     })
    //   });
    // }
  }

  componentWillUnmount(){
    const {resetActiveDeck} = this.props;
    resetActiveDeck();
  }

  onUnload = (e) =>{
    e.returnValue = "foo";
  };

  handleDeckVotingClick = (e) =>{
    const {activeUser, currentDeck, updateDeckRating} = this.props;
    let vote = e.currentTarget.id;
    const {deckId} = currentDeck;
    const {uid} = activeUser;
    udpateDeckRating(deckId, uid, vote, (voteType)=>updateDeckRating(voteType));
  };

  handleDeckEditingClick = () =>{
    const {toggleDeckEditing, deckEditing} = this.props;
    toggleDeckEditing(!deckEditing)
  };

  handleCardRemovalClick = (e) =>{
    const {editingDecklist} = this.props;
    let cards = editingDecklist.cards;
    let manaCurve = editingDecklist.manaCurve;
    let target = e.currentTarget;
    let targetDataset = target.dataset;
    let cardName = target.id;
    let cardCost = targetDataset.cost;

    let decklistAfterCardRemoval = Object.keys(cards).reduce((acc, card) => {
      const currCard = cards[card];
      if(card !== cardName) {
        acc[card] = currCard
      }
      return acc;
    }, {});

    //need amount of card here
    let manacurveAfterCostRemoval = manaCurve.map((c, i) => i == cardCost ? c-1 : c);
    let max = _.max(manacurveAfterCostRemoval);

    this.props.fetchDecks({
        cards: decklistAfterCardRemoval,
        manaCurve: manacurveAfterCostRemoval,
        max
      //add type and rarity
    });
  };

  render() {
    const {activeUser, patch, currentDeck, params, editingDecklist, deckEditing, updateDecklist, editingDeckDescription, deckAuthor} = this.props;
    let decksNotEqual = JSON.stringify(editingDecklist) !==  JSON.stringify(currentDeck.deck);
    let descriptionsNotEqual = editingDeckDescription && (editingDeckDescription !== currentDeck.description);
    return (
        <div className="container__page container__page--twoSided deck">
          {/*<LeftContainer currentDeck={currentDeck}*/}
                         {/*cards={this.props.cards}*/}
                         {/*editingDecklist={editingDecklist}*/}
                         {/*deckEditing={deckEditing}*/}
                         {/*updateDecklist={updateDecklist}*/}
                         {/*handleCardRemovalClick={this.handleCardRemovalClick}/>*/}
          {/*<RightContainer currentDeck={currentDeck}*/}
                          {/*params={params}*/}
                          {/*patch={patch}*/}
                          {/*deckAuthor={deckAuthor}*/}
                          {/*decksNotEqual={decksNotEqual}*/}
                          {/*descriptionsNotEqual={descriptionsNotEqual}*/}
                          {/*activeUser={activeUser}*/}
                          {/*deckEditing={deckEditing}*/}
                          {/*handleDeckEditingClick={this.handleDeckEditingClick}*/}
                          {/*handleDeckVotingClick={this.handleDeckVotingClick}/>*/}
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  const {activeDeck, deckAuthor, deckVote, deckEditing, editingDecklist, editingDeckDescription} = state.deckView;
  const {cards} = state.cards;
  return {activeDeck, deckAuthor, deckVote, cards, deckEditing, editingDecklist, editingDeckDescription}
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDeck: payload => dispatch({type: FETCH_ACTIVE_DECK_REQUEST, payload}),
    fetchDeckAuthor: payload => dispatch({type: FETCH_DECK_AUTHOR_REQUEST, payload}),
    resetActiveDeck: () => dispatch({type: RESET_ACTIVE_DECK})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Deck);

Deck.propTypes = {
  activeUser: PropTypes.object,
  currentDeck: PropTypes.object,
  params: PropTypes.object,
  updateDeckRating: PropTypes.func,
};