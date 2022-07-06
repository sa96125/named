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

<svelte:head>
	<title>{'Sign In | Named'}</title>
</svelte:head>

<main class="flex-center flex-col">
	<h2 class="mb-16">당신의 경험을 기여해주세요.</h2>
	<h4>로그인 하기</h4>

	<form
		action="/api/auth/login"
		method="post"
		class="flex-center flex-col w-full max-w-sm px-10 mt-2"
	>
		<fieldset class="w-full">
			<input
				name="email"
				type="email"
				aria-label="login Email"
				placeholder="e - m a i l"
				class="login-input"
			/>
		</fieldset>

		<fieldset class="w-full">
			<input
				name="password"
				type="password"
				aria-label="login Password"
				placeholder="p a s s w o r d"
				class="login-input"
				autocomplete="on"
			/>
		</fieldset>
		<button type="submit" class="m-4" />
	</form>

	<!-- TODO : 비밀번호 찾기, 계정 생성 페이지 필요. 페이지는 모달 형식으로 생각중. -->
	<div class="flex-center flex-col gap-2 p-xs">
		<p>Email 또는 Password를 잊으셨나요?</p>
		<p>
			계정이 없으신가요?
			<a class="text-blue-400 border-b-[1px] border-blue-400" href="/">create account</a>
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
