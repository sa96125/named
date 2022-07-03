<script context="module">
	export async function load({ session }) {
		if (session.userId) {
			return {
				status: 302,
				redirect: '/'
			};
		}
		return {};
	}
</script>

<script>
	const title = '로그인 하기';
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<main class="flex-center flex-col">
	<h2 class="mb-16">당신의 경험을 기여해주세요.</h2>
	<h4>{title}</h4>

	<form
		action="/api/auth/login.json"
		method="post"
		class="flex-center flex-col w-full max-w-sm px-10 mt-2"
	>
		<input
			name="email"
			type="email"
			aria-label="login Email"
			placeholder="e - m a i l"
			class="login-input"
		/>

		<input
			name="password"
			type="password"
			aria-label="login Password"
			placeholder="p a s s w o r d"
			class="login-input"
		/>

		<button type="submit" class="m-4" />
	</form>

	<!-- TODO : 비밀번호 찾기, 계정 생성 페이지 필요. 페이지는 모달 형식으로 생각중. -->
	<div class="flex-center flex-col gap-2 p-xs">
		<p>Email 또는 Password를 잊으셨나요?</p>
		<p>
			계정이 없으신가요?
			<a class="yellow-link" href="/">create account</a>
		</p>
	</div>
</main>

<style>
	input:focus-visible {
		outline: none;
		border: 1px solid black !important;
		color: black !important;
	}
	button {
		width: 30px;
		height: 30px;
		background-image: url('/icons/login.svg');
		background-repeat: no-repeat;
		opacity: 0.1;
	}
	input:focus + button {
		transition: opacity 0.4s;
		opacity: 1;
	}
</style>
