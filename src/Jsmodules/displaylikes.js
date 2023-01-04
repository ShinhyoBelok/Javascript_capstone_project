const likesAPI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/lfiNWiSutZHfoDfs9JiB/likes/';
const createApp = () => {
  fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/', { method: 'POST' }).then(res => res.json()).then(data => console.log(data));
}

const getLikes = () => {
  fetch(likesAPI, {method: 'GET', })
  .then(res => res.json())
  .then(data => {
    const likeText = document.querySelectorAll('.likeText');
    for (let i = 0; i < likeText.length; i += 1) {
      const numOfLikes = data.find(like => like.item_id === (i + 1));
      if (numOfLikes === undefined ) return;
      likeText[i].innerHTML = `${numOfLikes.likes} Likes`;
    }
  })
}
getLikes();

const postLikes = async (id) => {
  await fetch(likesAPI, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ item_id: id })
  })
}

const showLike = async (id) => {
  await getLikes();
  const like = document.querySelector(`.like${id}`);
}