(function () {
	'use strict';

	const Router = window.Router;
	const ChatView = window.ChatView;
	const mainView = window.mainView;
	const loginView = window.loginView;
	const registView = window.registView;
	const menuView = window.menuView;


	// TIP: роуты нужно указывать от наиболее специфичного к наименее специфичному
	// З.Ы. чтобы более ранние роуты не были префиксами более поздних ;]
	(new Router)
		.addRoute('/chat', ChatView)
		.addRoute('/login',loginView)
		.addRoute('/registration',registView)
		.addRoute('/menu',menuView)
		.addRoute('/searchGame',loginView)
		.addRoute('/rating',registView)
		.addRoute('/profile',menuView)
		.addRoute('/config',menuView)

		.addRoute('/', mainView)

		.start();

})();
