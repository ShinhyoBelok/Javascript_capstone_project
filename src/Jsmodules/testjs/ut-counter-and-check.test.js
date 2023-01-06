/**
* @jest-environment jsdom
*/

import utCounterCheck from "../ut-counter-and-check";

const mockCommentsList = (numComments) => {
  document.body.innerHTML = ``;
  for (let i = 0; i < numComments; i += 1) {
      const newComment = document.createElement('li');
      newComment.innerHTML = ` 
      <p class="popup-comment-date">hola</p>`;
      newComment.classList = 'popup-comment-item';
      document.body.appendChild(newComment);
  }
}

describe('comments-counter', () => {
  
  test('Correctly count the num of comments test1', () => {
    const num = 0;
    mockCommentsList(num);
    const count = utCounterCheck('popup-comment-item');
    expect(count).toBe(0);
  });

  test('Check if class exist test4', () => {
    const num = 10;
    mockCommentsList(num);
    const count = utCounterCheck('clase-inexistente');
    expect(count).toBe(0);
  });

  test('Correctly count the num of comments test2', () => {
    const num = 100;
    mockCommentsList(num);
    const count = utCounterCheck('popup-comment-item');
    expect(count).toBe(num);
  });
 
  test('If class parameters is no given', () => {
    const num = 2;
    mockCommentsList(num);
    const count = utCounterCheck();
    expect(count).toBe(0);
  });
});
