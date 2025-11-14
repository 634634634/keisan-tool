// 即時実行関数でスコープを限定
(function() {
    // ▼▼▼ ここに好きなパスワードを設定してください ▼▼▼
    const PASSWORD = '2892';
    // ▲▲▲ ここに好きなパスワードを設定してください ▲▲▲

    const AUTH_KEY = 'password_authenticated';

    // 認証済みかチェックする関数
    function isAuthenticated() {
        // sessionStorageに認証済みのフラグがあるか確認
        return sessionStorage.getItem(AUTH_KEY) === 'true';
    }

    // ページ読み込み時に認証を実行
    if (isAuthenticated()) {
        // 認証済みなら何もしない（ページの非表示を解除）
        document.documentElement.style.visibility = 'visible';
    } else {
        // 未認証ならパスワードを要求
        const enteredPassword = prompt('パスワードを入力してください:', '');

        if (enteredPassword === PASSWORD) {
            // パスワードが正しければ、セッションストレージにフラグを立てる
            sessionStorage.setItem(AUTH_KEY, 'true');
            document.documentElement.style.visibility = 'visible';
        } else {
            // パスワードが間違っていれば、エラーメッセージを表示
            document.body.innerHTML = '<div style="text-align: center; margin-top: 50px;"><h1>アクセスが拒否されました</h1><p>パスワードが正しくありません。</p></div>';
            document.documentElement.style.visibility = 'visible';
        }
    }
})();