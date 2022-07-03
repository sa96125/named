<script>
	const title = "로그인 하기"
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<main>
	<h2>당신의 선한 영향력이 미치는 효과</h2>
	<h3>{title}</h3>

	<form action="" method="">

		<input
			name="email"
			type="email"
			aria-label="login Email"
			placeholder="e - m a i l"
		/>

		<input
			name="password"
			type="password"
			aria-label="login Password"
			placeholder="p a s s w o r d"
		/>

	</form>

	<!-- TODO : 비밀번호 찾기, 계정 생성 페이지 필요. 페이지는 모달 형식으로 생각중. -->
	<div>
		<p>P h i ID 또는 Password를 잊으셨나요?</p>
		<p>P h i ID 가 없으신가요? create account</p>
	</div>

</main>
