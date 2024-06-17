function clinkz1(){
if (typeof(Array.from(document.querySelectorAll('div')).find(el => el.textContent === 'Xác nhận')) != 'undefined' && Array.from(document.querySelectorAll('div')).find(el => el.textContent === 'Xác nhận') != null) {
Array.from(document.querySelectorAll('div')).find(el => el.textContent === 'Xác nhận').closest('button').click();
}};
function clinkz2(){
if (typeof(Array.from(document.querySelectorAll('span')).find(el => el.textContent === 'Mở khóa')) != 'undefined' && Array.from(document.querySelectorAll('span')).find(el => el.textContent === 'Mở khóa') != null) {
	if (typeof(document.querySelectorAll('input[placeholder="Nhập mật khẩu"][type="password"][value="00000000"]')) != 'undefined' && document.querySelector('input[placeholder="Nhập mật khẩu"][type="password"][value="00000000"]') != null) {
Array.from(document.querySelectorAll('span')).find(el => el.textContent === 'Mở khóa').closest('button').click();
}}};


function init(){
var intervalId1 = window.setInterval(function(){ clinkz1(); }, 1000);
var intervalId2 = window.setInterval(function(){ clinkz2(); }, 1000);
};
init();