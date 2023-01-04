const likesAPI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/lfiNWiSutZHfoDfs9JiB/likes/';

const getLikes = () => {
  fetch(likesAPI, { method: 'GET' })
    .then((res) => res.json())
    .then((data) => {
      const likeText = document.querySelectorAll('.likeText');
      for (let i = 0; i < likeText.length; i += 1) {
        const numOfLikes = data.find((like) => like.item_id === (i + 1));
        if (numOfLikes === undefined) return;
        likeText[i].innerHTML = `${numOfLikes.likes} Likes`;
      }
    });
};

const postLikes = (id) => {
  fetch(likesAPI, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ item_id: id }),
  });
  const likeTextElement = document.querySelector(`#like${id}`);
  const numLikes = parseInt(likeTextElement.innerHTML.substring(0, 1), 10);
  likeTextElement.innerHTML = `${numLikes + 1} Likes`;
};

const addeventLikes = () => {
  const likeIcon = document.querySelectorAll('.likeIcon');
  likeIcon.forEach((like) => {
    like.addEventListener('click', (e) => {
      const { id } = e.target;
      postLikes(parseInt(id.substring(5), 10));
    });
  });
};

export { addeventLikes, getLikes };