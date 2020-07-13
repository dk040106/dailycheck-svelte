import { writable } from 'svelte/store';

export const userStore = writable({});

export const habitStore = writable([
  { title: '물 마시기', checked: true },
  { title: '양치 하기', checked: true },
  { title: '일기 쓰기', checked: false },
]);

const current = new Date();
const days = ['일', '월', '화', '수', '목', '금', '토'];

export const dateStringKorean = `${current.getFullYear()}년 ${
  current.getMonth() + 1
}월 ${current.getDate()}일 ${days[current.getDay()]}요일`;

export const dateString = `${current.getFullYear()}-${
  current.getMonth() + 1
}-${current.getDate()}`;
