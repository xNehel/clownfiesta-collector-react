/**
 *  Updates `selector` votes via Firebase transaction method; See https://firebase.google.com/docs/database/web/read-and-write#save_data_as_transactions
 *
 * @param {function} selector - Firebase reference (i.e ref.child(`decks`))
 * @param {string} uid - User ID
 * @param {string} vote - Vote type (upvote or downvote)
 */
export default function (selector, uid, vote){
  return selector.transaction(function(element){
    const upvote = "upvote";
    const downvote = "downvote";

    if(element){
      if(element[uid]){

        if(element[uid] === upvote && vote === upvote){
          element.votes--;
          element.upvotes--;
          element[uid] = null
        }

        else if (element[uid] === downvote && vote === downvote) {
          element.votes++;
          element.downvotes--;
          element[uid] = null
        }

        else if (element[uid] === upvote && vote === downvote){
          element.votes -= 2;
          element.upvotes--;
          element.downvotes++;
          element[uid] = downvote;
        }

        else {
          element.votes += 2;
          element.upvotes++;
          element.downvotes--;
          element[uid] = upvote;
        }
      }

      else {
        element[uid] = vote;
        element[uid] === upvote ? element.votes++ : element.votes--;
        element[uid] === upvote ? element.upvotes++ : element.downvotes++;
        if(!element.votes){
          element.votes = element.upvotes - element.downvotes;
        }
      }
    }
    return element;
  });
}