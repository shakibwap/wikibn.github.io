/* * * * * * * * * * * * * * * * *
                  *
Author : Lucky Muhamad
Email : kisni@live.com
URL : http://kisni.wen.ru
* * * * * * * * * * * * * * * * *
                  *
// jangan dihapus? jangan dihapus? sekalipun script ini sudah jadi milik anda, tapi tetap saja script ini adalah hasil karya saya, sekiranya anda merasa gengsi atau keberatan ada nama saya tertulis di dalamnya, alangkah baiknya jika anda tidak menggunakan script ini dari pada anda merusak hasil karya orang lain. katanya masterwap, masa gini aja ngebajak? gua aja yang bukan master bisa buat. wakakak
* * * * * * * * * * * * * * * * *
                  */
var islam;
function sekarang(Tahun)
{
return Tahun%4 == 0 && Tahun%100 != 0 || Tahun%400 == 0;
}
function konversi_waktu(Tahun, Bulan, Tanggal)
{
var l = Math.floor((Tahun - 1) / 4);
var u = Math.floor((Tahun - 1) / 100);
var c = Math.floor((Tahun - 1) / 400);
var k = Math.floor((367 * Bulan - 362) / 12);
if (Bulan <= 2)
y = 0;
else if (Bulan > 2 && sekarang(Tahun))
y = -1;
else
y = -2;
return 1 - 1 + 365 * (Tahun - 1) + l - u + c + k + y + Tanggal;
}
function tanggal_hijriah(Tahun, Bulan, Tanggal)
{
this.year = Tahun;
this.month = Bulan;
this.day = Tanggal;
this.toFixed = tetapkan_hijriah;
this.toString = hijriah_ke_string;
}
function tetapkan_hijriah()
{
return this.day + Math.ceil(29.5 * (this.month - 1)) + (this.year - 1) * 354 +
Math.floor((3 + 11 * this.year) / 30) + 227015 - 2;
}
function hijriah_ke_string()
{
var bulan_hijriah = new Array("Muharram","Safar","Rabi'ul Awal","Rabi'ul Akhir","Jumadil Awal","Jumadil Akhir","Rajab","Sha'ban","Ramadhan","Syawal","Dzulqaidah","Dzulhijjah");
return this.day + " " + bulan_hijriah[this.month - 1]+ " " + this.year;
}
function pusing(lieur)
{
var lucky=new tanggal_hijriah(1100, 1, 1);
lucky.year = Math.floor((30 * (lieur - 227015) + 10646) / 10631);
var ganteng=new tanggal_hijriah(lucky.year, 1, 1);
var banget = Math.ceil((lieur - 29 - ganteng.toFixed()) / 29.5) + 1;
lucky.month = Math.min(banget, 12);
ganteng.year = lucky.year;
ganteng.month = lucky.month;
ganteng.day = 1;
lucky.day = lieur - ganteng.toFixed() + 1;
return lucky;
}
var KisniWenRu=new Date();
var Y = KisniWenRu.getUTCFullYear();
var M = KisniWenRu.getUTCMonth();
var D = KisniWenRu.getUTCDate();
M++;
islam=konversi_waktu(Y, M, D);
var h=new tanggal_hijriah(1421, 11, 28);
h = pusing(islam);
hijriah = h.toString() + ' H';
function warnawarni(karakter)
{
this.length=karakter;
for (var pelangi=1; pelangi<=karakter; pelangi++)
this[pelangi]=pelangi-1;
this[11]="A";
this[12]="B";
this[13]="C";
this[14]="D";
this[15]="E";
this[16]="F";
return this;
}
hasil = new warnawarni(16);
function konvert(huruf)
{
var kuat=huruf/16;
var tengah=kuat+"";
tengah=tengah.substring(0,2);
kuat=parseInt(tengah,10);
var kiri=hasil[kuat+1];
var lemah=huruf-kuat*16;
tengah=lemah+"";
tengah=tengah.substring(0,2);
lemah=parseInt(tengah,10);
var kanan=hasil[lemah+1];
var string=kiri+""+kanan;
return string;
}
function rainbow(teks)
{
teks=teks.substring(3,teks.length-4);
warna_d1=255;
muncul=warna_d1/teks.length;
for(pelangi=0;pelangi < teks.length;pelangi++)
{
warna_d1=255*Math.sin(pelangi/(teks.length/3)); "255*Math.sin(pelangi/(teks.length/3))"
warna_h1=konvert(warna_d1);
warna_d2=muncul*pelangi;
warna_h2=konvert(warna_d2);
document.write("<font color=\"#ff"+warna_h1+warna_h2+"\">"+hijriah.substring(pelangi,pelangi+1)+"</font>");
}
}
rainbow("<< ABCDEFGHIJKLMNOPQRRSTUVWX  >>");
