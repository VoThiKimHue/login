const signIn = () => {
    if (checkEmailTT() == 1 && checkSyntax() == 1) {
      getInfo();
      window.location.href =
        "http://127.0.0.1:5500/login.html";
    }
  };
  const Log = () => {
    window.location.href =
      "http://127.0.0.1:5500/login.html";
  };
  
  // kiem tra cu phap cua email, pass va confirmpass;
  const checkSyntax = () => {
    const email = document.getElementById("mail").value;
    const pass = document.getElementById("password").value;
    const confirm = document.getElementById("confirm").value;
  
    const passwordID = document.getElementById("error-pass");
    const mailID = document.getElementById("error-mail");
    const regexemail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexpass = /^(?=.*[a-z])(?=.*[A-Z]).{8,32}$/;
  
    if (regexemail.test(email)) {
      mailID.style.display = "none";
    } else {
      document.getElementById("error-mail").innerHTML = "sai cú pháp email";
      mailID.style.display = "block";
    }
    if (regexpass.test(pass)) {
      passwordID.style.display = "none";
    } else {
      document.getElementById("error-pass").innerHTML =
        "Sai định dạng mật khẩu (8-32 kí tự, có chữ cái viết hoa và thường)";
      passwordID.style.display = "block";
    }
  
    if (pass != confirm) {
      document.getElementById("error-pass").innerHTML = "Mật khẩu xác nhận sai";
      passwordID.style.display = "block";
    }
  
    if (
      regexemail.test(email) == true &&
      regexpass.test(pass) == true &&
      pass == confirm
    ) {
      return 1;
    } else {
      return 0;
    }
  };
   
  const checkEmailTT = () => {
    const email = document.getElementById("mail").value;
    const pass = document.getElementById("password").value;
    const confirm = document.getElementById("confirm").value;
    const passwordID = document.getElementById("error-pass");
    const mailID = document.getElementById("error-mail");
    // Lấy danh sách các tài khoản từ LocalStorage
    var storedAccounts = localStorage.getItem("accounts");
    var accounts = storedAccounts ? JSON.parse(storedAccounts) : {};
  
    // Email mới cần kiểm tra
    var newEmail = email;
  
    // Kiểm tra xem email mới đã tồn tại trong danh sách tài khoản hay không
    if (accounts.hasOwnProperty(newEmail)) {
      document.getElementById("error-mail").innerHTML = "Email da ton tai";
      mailID.style.display = "block";
      return 0;
    } else {
      mailID.style.display = "none";
      return 1;
    }
  };
  
  const getInfo = () => {
    const email = document.getElementById("mail").value;
    const pass = document.getElementById("password").value;
    const confirm = document.getElementById("confirm").value;
  
    // Lấy danh sách các tài khoản từ LocalStorage
    var storedAccounts = localStorage.getItem("accounts");
    var accounts = storedAccounts ? JSON.parse(storedAccounts) : {};
  
    // Thêm tài khoản mới
    var newEmail = email;
    var newPassword = pass;
    accounts[newEmail] = newPassword;
  
    // Lưu danh sách mới vào LocalStorage
    localStorage.setItem("accounts", JSON.stringify(accounts));
  
    //Chuyen huong sang trang login.
  };

  const Sign = () => {
    window.location.href =
      "http://127.0.0.1:5500/index.html";
  };

  
  const Login = () => {
    if (checkmail() == 1) {
      window.location.href =
        "http://127.0.0.1:5500/trangcuoi.html";
    }
  };

  
  const checkmail = () => {
    const email = document.getElementById("log-email").value;
    const pass = document.getElementById("log-pass").value;
    const passwordID = document.getElementById("err-log-pass");
    const mailID = document.getElementById("err-log-email");
  
    // Lấy danh sách các tài khoản từ LocalStorage
    var storedAccounts = localStorage.getItem("accounts");
    var accounts = storedAccounts ? JSON.parse(storedAccounts) : {};
  
    // Email và mật khẩu cần kiểm tra
    var inputEmail = email;
    var inputPassword = pass;
    console.log(accounts.hasOwnProperty(inputEmail));
    // Kiểm tra xem email đã tồn tại trong danh sách tài khoản hay không
    if (accounts.hasOwnProperty(inputEmail)) {
      mailID.style.display = "none";
      // Kiểm tra xem mật khẩu nhập vào có khớp với mật khẩu của email đó hay không
      if (accounts[inputEmail] === inputPassword) {
        passwordID.style.display = "none";
        mailID.style.display = "none";
        return 1;
      } else {
        passwordID.style.display = "block";
        return 0;
      }
    } else {
      mailID.style.display = "block";
      passwordID.style.display = "none";
      return 0;
    }
  };
  
  const Change = () => {
    const email = document.getElementById("change-mail").value;
    const pass = document.getElementById("old-pass").value;
    const newpass = document.getElementById("new-pass").value;
    const confirmNP = document.getElementById("confirmNP").value;
    const passwordID = document.getElementById("error-change-pass");
    const mailID = document.getElementById("error-change-mail");
    var storedAccounts = localStorage.getItem("accounts");
    var accounts = storedAccounts ? JSON.parse(storedAccounts) : {};
  
    // Email và mật khẩu cũ và mới cần kiểm tra và thay đổi
    const inputEmail = email;
    const oldPassword = pass;
    const newPassword = newpass;
  
    // Kiểm tra xem email đã tồn tại trong danh sách tài khoản hay không
    if (accounts.hasOwnProperty(inputEmail)) {
      // Kiểm tra xem mật khẩu cũ nhập vào có khớp với mật khẩu của email đó hay không
      if (accounts[inputEmail] === oldPassword) {
        if (oldPassword === newPassword) {
          passwordID.innerHTML = "Ban da nhap mat khau trung voi mat khau cu!";
          passwordID.style.display = "block";
          mailID.style.display = "none";
          return 0;
        } else if (newPassword === confirmNP) {
  
          const regexpass = /^(?=.*[a-z])(?=.*[A-Z]).{8,32}$/;
  
          if (regexpass.test(newPassword)) {
            passwordID.style.display = "none";
            mailID.style.display = "none";



            // Thay đổi mật khẩu của email đó thành mật khẩu mới
            accounts[inputEmail] = newPassword;
  
            // Lưu lại danh sách tài khoản mới vào LocalStorage
            localStorage.setItem("accounts", JSON.stringify(accounts));
            return 1;
          } else {
            passwordID.innerHTML =
              "Vui lòng nhập đúng định dạng mật khẩu (8-32 kí tự, có chữ cái viết hoa và thường)";
            passwordID.style.display = "block";
            return 0;
          }
          
        } else {
          passwordID.innerHTML = "Mat khau xac nhan sai!";
          passwordID.style.display = "block";
          mailID.style.display = "none";
          return 0;
        }
      } else {
        passwordID.innerHTML = "Mật khẩu cũ không chính xác!";
        passwordID.style.display = "block";
        mailID.style.display = "none";
        return 0;
      }
    } else {
      mailID.innerHTML = "Email không tồn tại trong hệ thống!";
      mailID.style.display = "block";
      passwordID.style.display = "none";
      return 0;

    }
  };
  
  const ChangePage = () => {
    window.location.href = "http://127.0.0.1:5500/doiMK.html";
  };
  const changesuccess = () => {
    if (Change() == 1) {
      window.location.href = "http://127.0.0.1:5500/doiMkthanhcong.html";
    }
  };