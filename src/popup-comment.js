import './popup-comment.css';
import pokemon3 from './img/pokemon3.png';
//  popup
export const popup = document.createElement('div');
popup.id = 'popup';
popup.classList = 'popup';
document.body.appendChild(popup);

// popup-window
const popupWindow = document.createElement('div');
popupWindow.classList = 'popup-window';
popup.appendChild(popupWindow);

// popup-header
const popupHeader = document.createElement('div');
popupHeader.classList = 'popup-header';
popupWindow.appendChild(popupHeader);

// popup-header text
const popupHeaderText = document.createElement('h2');
popupHeaderText.id = 'popupHeaderText';
popupHeaderText.classList = 'popup-header-text';
popupHeaderText.innerHTML = 'Test'; /// /// for test
popupHeader.appendChild(popupHeaderText);

// popup-header X-btn
const xBtn = document.createElement('p');
xBtn.id = 'xBtn';
xBtn.classList = 'x-btn';
xBtn.innerHTML = 'X';
popupHeader.appendChild(xBtn);

// popup-image
const popupImage = document.createElement('img');
popupImage.id = 'popupImage';
popupImage.classList = 'popup-image';
popupImage.src = pokemon3; /// ////////// for test
popupImage.alt = 'pokemon';
popupWindow.appendChild(popupImage);

// popup-image-details
const popupDetail = document.createElement('div');
popupDetail.id = 'popupDetail';
popupDetail.classList = 'popup-image-detail d-grid-2col';
/// /////////////// for test
popupDetail.innerHTML = `
                <p class="popup-detail-item">Color : Green</p>
                <p class="popup-detail-item">Age : 6 years</p>
                <p class="popup-detail-item">Power : 132</p>
                <p class="popup-detail-item">Speed : 42 KM/h</p>
`;
popupWindow.appendChild(popupDetail);

xBtn.addEventListener('click', () => {
  popup.classList.remove('display');
  // popupCommentList.innerHTML = '';
});

export function showPopup(name, image, info) {
  popupHeaderText.innerHTML = name;
  popupImage.src = image;
  popupDetail.innerHTML = info;
}

// popup-comment-header
const popupCommentHeader = document.createElement('h3');
popupCommentHeader.classList = 'popup-comment-header';
popupCommentHeader.innerHTML = 'Comments (4)'; /// /////// for test
popupWindow.appendChild(popupCommentHeader);

// popup-engage section
const engage = document.createElement('div');
engage.classList = 'd-grid-2col';
popupWindow.appendChild(engage);

// popup-comment-record
const popupCommentRecord = document.createElement('div');
popupCommentRecord.classList = 'popup-comment-record';
engage.appendChild(popupCommentRecord);

// popup-comment-list
const popupCommentList = document.createElement('ul');
popupCommentList.id = 'popupCommentList';
popupCommentList.classList = 'popup-comment-list';
popupCommentRecord.appendChild(popupCommentList);


/// get comments
export const getComments = async (itemId) => {
  //itemId = Number(itemId);
  const commentsAPI = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/lfiNWiSutZHfoDfs9JiB/comments?item_id=${itemId}`;
  //const commentsAPI = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/v1QM9q7o5iYcOME1s2k2/comments?item_id=${itemId}`;
  //const commentsAPI = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/v1QM9q7o5iYcOME1s2k2/comments?item_id=${itemId}`;
  await fetch(commentsAPI).then((response) => response.json()).then((json) => {
    if (json.length === undefined) {
      console.log("json.length undef", json.length )
      popupCommentHeader.innerHTML = 'Comments (0)';
      popupCommentList.innerHTML = '';
    } else {
      console.log("json.length ", json.length )
      popupCommentHeader.innerHTML = `Comments (${json.length})`;
      popupCommentList.innerHTML = '';
      json.forEach((element) => {
        const newComment = document.createElement('li');
        newComment.classList = 'popup-comment-item';
        newComment.innerHTML = ` 
            <label class="popup-comment-author">${element.username}</label>
            <p class="popup-comment-text">${element.comment}</p>
            <p class="popup-comment-date">${element.creation_date}</p>`;  
        popupCommentList.appendChild(newComment);
      });
    }
  }).catch((e) => e);
};

