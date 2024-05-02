const displayCurrentTime = ()=>{
  const currentTimeElement = document.querySelector('.current-time');
  const dateElement = document.querySelector('.date');

  const weeks = ['日','一','二','三','四','五','六']

  const currentTime = new Date();

  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();

  const month = currentTime.getMonth() + 1; // 月
  let date = currentTime.getDate();  // 日期
  const week = currentTime.getDay(); // 周 
  // 为了保证显示的格式，确保小时、分钟、秒钟都是两位数
  hours = (hours < 10 ? "0" : "") + hours;
  minutes = (minutes < 10 ? "0" : "") + minutes;
  seconds = (seconds < 10 ? "0" : "") + seconds;

  date = (date < 10 ? "0" : "") + date;


  // 将时间显示在页面上
  currentTimeElement.innerHTML = hours + ":" + minutes + ":" + seconds;
  dateElement.innerHTML = `${month}月${date}日 周${weeks[week]}`;

};

// 每秒钟更新一次时间
setInterval(displayCurrentTime, 1000);

displayCurrentTime();

// 切换皮肤
const dashboard = document.querySelector('.dashboard');
dashboard.addEventListener('mouseenter',()=>{
  dashboard.addEventListener('click',()=>{
    document.querySelector('.skins').style.display = 'block';
  })
})


dashboard.addEventListener('mouseleave',()=>{
  document.querySelector('.skins').style.display = 'none';
})
