<template>
   <header class='header'>
    <div class='header-wrapper'>
      <a class='header-logo' href='#/'>
        <img alt='logo' class='logo-img'
          src='https://habrastorage.org/getpro/moikrug/uploads/company/100/005/958/5/logo/medium_4a47a0db6e60853dedfcfdf08a5ca249.png' />
        <span>posts</span>
      </a>
      <div class='menu-wrapper'>
        <nav>
          <ul class='header-menu'>
            <li><a>Лучшее</a></li>
            <li><a>Свежее</a></li>
            <li><a>Подписки</a></li>
            <li><a>Сообщества</a></li>
            <li><a>Блоги</a></li>
          </ul>
        </nav>
      </div>
      <div class='user-btns'>
        <a class='user-btn'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google"
            viewBox="0 0 16 16">
            <path
              d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z" />
          </svg>
        </a>
        <a class='user-btn'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telegram"
            viewBox="0 0 16 16">
            <path
              d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09" />
          </svg>
        </a>
        <a class='user-btn'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
            class="bi bi-pinterest" viewBox="0 0 16 16">
            <path
              d="M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 1 0 8 0" />
          </svg></a>
        <a class='btn'>Войти</a>
      </div>
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style>
.header {
  background: #1d2224;
}

.header-wrapper {
  max-width: 1260px;
  margin: 0 auto;
  display: flex;
  align-items: center;
}

.header-menu {
  display: flex;
}

.header-menu a {
  font-size: 18px;
  height: 60px;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
  padding: 0 10px;
}

.header-menu a:hover {
  color: #5d8244;
  background: #282f2e;
}

.user-btns {
  margin-left: auto;
}

.header-logo {
  display: flex;
  align-items: center;
  font-size: 28px;
  margin-right: 80px;
}


.logo-img {
  height: 32px;
  width: 32px;
  margin-right: 8px;
  border-radius: 6px;
}

.user-btns {
  display: flex;
  gap: 4px;
  border: 1px solid rgb(23, 23, 23);
  border-radius: 6px;
  padding: 6px 10px;
}

.user-btn {
  align-items: center;
  justify-content: center;
  display: flex;
  background: #6a6f76;
  height: 28px;
  width: 28px;
  border-radius: 4px;
  transition: background 0.3s ease;
}

.user-btn:hover {
  background: #1a1e21;
}

.btn {
  color: #5d8244;
  align-items: center;
  justify-content: center;
  display: flex;
  height: 28px;
  border: 1px solid #5d8244;
  border-radius: 4px;
  padding: 0px 10px;
  transition: opacity 0.3s ease;
}

.btn:hover {
  opacity: 0.7;
}
@media(max-width: 1300px){
  .header-wrapper {
    padding: 0 15px;
  }
}
@media(max-width: 998px){
  .menu-wrapper {
    display: none;
  }
  .header-wrapper {
    padding: 10px 15px;
  }
  .header-logo{
    margin-right: 20px;
  }
}
</style>