import { derived, readable, writable } from 'svelte/store';

// 수정이 필요하지 않을 경우
export const time = readable(new Date(), (set) => {
	const interval = setInterval(() => set(new Date()));
	return () => clearInterval(interval);
});

//  기존에 값을 가공하여 사용 like getter
//  $는 구독과 제거를
export const elapsed = derived(time, ($time) => Math.round((+$time - +new Date()) / 1000));

// 수정이 가능한 전역 변수
export const num = writable(0);

// 미리 전역 변수를 컨트롤하는 로직을 포함한 객체
function createCount() {
    const { subscribe, set, update } = writable(0);

    return {
      subscribe,
      increment: () => update(n => n + 1),
      decrement: () => update(n => n - 1),
      reset: () => set(0)
    };
  }

  export const count = createCount();
