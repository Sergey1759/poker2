function card(id,title,lear,src_image){
    this.id        = id,
    this.title     = title,
    this.lear      = lear,
    this.src_image = src_image
};

var koloda = [                      
  card1 =   new card('1','2','bubna','./img/kart/2D.png'),
  card2 =   new card('2','2','hrest','./img/kart/2C.png'),
  card3 =   new card('3','2','cherv','./img/kart/2H.png'),
  card4 =   new card('4','2','picka','./img/kart/2S.png'),
    
  card5 =   new card('5','3','bubna','./img/kart/3D.png'),
  card6 =   new card('6','3','hrest','./img/kart/3C.png'),
  card7 =   new card('7','3','cherv','./img/kart/3H.png'),
  card8 =   new card('8','3','picka','./img/kart/3S.png'),
    
  card9 =   new card('9' ,'4','bubna','./img/kart/4D.png'),
  card10 =  new card('10','4','hrest','./img/kart/4C.png'),
  card11 =  new card('11','4','cherv','./img/kart/4H.png'),
  card12 =  new card('12','4','picka','./img/kart/4S.png'),
    
  card13 = new card('13','5','bubna','./img/kart/5D.png'),
  card14 = new card('14','5','hrest','./img/kart/5C.png'),
  card15 = new card('15','5','cherv','./img/kart/5H.png'),
  card16 = new card('16','5','picka','./img/kart/5S.png'),
    
  card17 = new card('17','6','bubna','./img/kart/6D.png'),
  card18 = new card('18','6','hrest','./img/kart/6C.png'),
  card19 = new card('19','6','cherv','./img/kart/6H.png'),
  card20 = new card('20','6','picka','./img/kart/6S.png'),
    
  card21 = new card('21','7','bubna','./img/kart/7D.png'),
  card22 = new card('22','7','hrest','./img/kart/7C.png'),
  card23 = new card('23','7','cherv','./img/kart/7H.png'),
  card24 = new card('24','7','picka','./img/kart/7S.png'),
    
  card25 = new card('25','8','bubna','./img/kart/8D.png'),
  card26 = new card('26','8','hrest','./img/kart/8C.png'),
  card27 = new card('27','8','cherv','./img/kart/8H.png'),
  card28 = new card('28','8','picka','./img/kart/8S.png'),
    
  card29 = new card('29','9','bubna','./img/kart/9D.png'),
  card30 = new card('30','9','hrest','./img/kart/9C.png'),
  card31 = new card('31','9','cherv','./img/kart/9H.png'),
  card32 = new card('32','9','picka','./img/kart/9S.png'),
    
  card33 = new card('33','10','bubna','./img/kart/10D.png'),
  card34 = new card('34','10','hrest','./img/kart/10C.png'),
  card35 = new card('35','10','cherv','./img/kart/10H.png'),
  card36 = new card('36','10','picka','./img/kart/10S.png')  ,
    
  card37 = new card('37','11','bubna','./img/kart/JD.png'),
  card38 = new card('38','11','hrest','./img/kart/JC.png'),
  card39 = new card('39','11','cherv','./img/kart/JH.png'),
  card40 = new card('40','11','picka','./img/kart/JS.png'),
    
  card41 = new card('41','12','bubna','./img/kart/QD.png'),
  card42 = new card('42','12','hrest','./img/kart/QC.png'),
  card43 = new card('43','12','cherv','./img/kart/QH.png'),
  card44 = new card('44','12','picka','./img/kart/QS.png'),
    
  card45 = new card('45','13','bubna','./img/kart/KD.png'),
  card46 = new card('46','13','hrest','./img/kart/KC.png'),
  card47 = new card('47','13','cherv','./img/kart/KH.png'),
  card48 = new card('48','13','picka','./img/kart/KS.png'),
    
  card49 = new card('49','14','bubna','./img/kart/AD.png'),
  card50 = new card('50','14','hrest','./img/kart/AC.png'),
  card51 = new card('51','14','cherv','./img/kart/AH.png'),
  card52 = new card('52','14','picka','./img/kart/AS.png')
]

var arr_table = [];
var count_table  = 0;

var arr_title = [];
var count_title  = 0;

var arr_title_flesh = [];
var count_title_flesh  = 0;
////////////////////////////
var arr_table_rand = [];
var count_table_rand  = 0;

var arr_title_rand = [];
var count_title_rand  = 0;


card.prototype.add_start_DOM = function addDOM(card){ 
    //console.log(this.id + ' ' + this.title + ' ' + this.lear + ' ' + this.src_image)
     var div = document.createElement('div');
     var top = document.getElementById("top"); 
     div.className = "my_col";
     div.style.backgroundImage = "url(" + this.src_image + ")";
     div.id = this.id;
     top.appendChild(div);
}

  

card.prototype.add_finish_DOM = function addDOM(card){ 
  function addUrl(){
        var id = this.id-1;
        console.log(koloda[id]);
        div.classList.add("rotate");
       
        setTimeout(function(){
       div.style.backgroundImage = "url(" + koloda[id].src_image + ")"; 
       div.style.border = "4px solid  #8358f8";
       div.style.borderRadius = "15px";
        },500)
        arr_table[count_table++] = koloda[id];
        arr_title[count_title++] = koloda[id].title;
        console.log(arr_table);
    } 
    
    var bottom = document.getElementById("bottom");
    var div = document.createElement('div');
    div.id = this.id;
    div.className = "my_col";
    div.addEventListener("click", addUrl);
   // div.removeEventListener("click", addUrl);
    bottom.appendChild(div);
}

card.prototype.deleteListener = function q(card){ 
  function addUrl(){
        var id = this.id-1;
        console.log(koloda[id]);
       div.style.backgroundImage = "url(" + koloda[id].src_image + ")"; 
       div.style.border = "4px solid  #8358f8";
       div.style.borderRadius = "15px";
        arr_table[count_table++] = koloda[id];
        arr_title[count_title++] = koloda[id].title;
        console.log(arr_table);
    } 
    console.log("deletListner");
    div.removeEventListener("click", addUrl);
}


////////////////////////////////////
function _randomArray(kart){
var max = 52;
var mas = [];
var mas1 = [];
for(var i = 1; i <= max; i++){
  mas[i] = i;
}
var i = 0;
var j = 0;
//while( i < kart){
//  var num = Math.floor(Math.random() * (max - 1 + 1)) + 1;
//  if(mas[num] != 0){
//    mas1[i] = mas[num];
//    mas[num] = 0;
//    i++; 
//  }
//  j++;
//}
mas1 [0] = 1;
mas1 [1] = 22;
mas1 [2] = 9;
mas1 [3] =43;
mas1 [4] = 6;
mas1 [5] = 52;
mas1 [6] = 4;
mas1 [7] = 3;
mas1 [8] = 2;
return mas1;
}

var randomArray = _randomArray(9);
console.log(randomArray);

function addKartDOM(randomArray){
    for(var i = 0; i < randomArray.length; i++){
        if(i < 5){
           for(key in koloda){
                if(randomArray[i] == koloda[key].id){
                   arr_table[count_table++] = koloda[key];
                   arr_title[count_title++] = koloda[key].title; 
                   koloda[key].add_start_DOM();
                } 
            }
        } else {
            for(key in koloda){
                if(randomArray[i] == koloda[key].id){
                   arr_table_rand[count_table_rand++] = koloda[key];
                   arr_title_rand[count_title_rand++] = koloda[key].title; 
                   koloda[key].add_finish_DOM();
                } 
            }
        }
    }
}
addKartDOM(randomArray);


var boolArray = [];

boolArray[0] = false; //para
boolArray[1] = false; //double para
boolArray[2] = false; // set
boolArray[3] = false; // strit
boolArray[4] = false; // flesh
boolArray[5] = false; // full hause
boolArray[6] = false; // kare
boolArray[7] = false; // strit flash
boolArray[8] = false; // flesh royal
var StringWin = ["Вітаємо у вас пара" ,"Вітаємо у вас дві пари" ," Вітаємо у вас сет" ," Вітаємо у вас стріт " ," Вітаємо у вас флеш" ,"Вітаємо у вас Каре" ] 
var variaflesh = [];
var count_flashQ = 0;


//var timerId = setInterval(function(){
//    if(arr_table.length == 7) {
//    stright(arr_title);
//    flesh(arr_table);
//    other(arr_table);
//    //console.log(boolArray);
//}
//},1000);

var timerId = setInterval(function(){
    if(arr_table.length == 7) {
    straight(arr_table);
    //console.log("flesh(arr_table)");
    //console.log(flesh(arr_table));
    //other(arr_table);
        //para(arr_table);
        //console.log("ArrayPossibleCombinations");
        //console.log(ArrayPossibleCombinations);
    //console.log(boolArray);
    var div = document.getElementsByClassName("my_col");
        for(var i = 0; i < div.length; i++){
            div[i].deleteListener;
        }
}
},1000);


setTimeout(function() {
    var once = 0;
    var center = document.getElementById("center");
  clearInterval(timerId);
  for(var i = boolArray.length-1; i >= 0; i--){
      if(boolArray[i] && once == 0) { 
          center.innerHTML = StringWin[i]; 
          center.classList.add("opacity");
          console.log(boolArray);
          console.log(StringWin);
          once++;
      } else {
          console.log("highcard(arr_table)");
          console.log(highcard(arr_table));
      };
      
  }
}, 6600);

var ArrayPossibleCombinations = [];
var countCombinations = 0;
//
//function stright (buf){
//    var randomArray = [];
//    for(var i = 0; i < buf.length; i++){
//        randomArray[i] = buf[i];
//    }
//    function doSmth(a) {
//  for (var q=1, i=1; q<a.length; ++q) {
//    if (a[q] !== a[q-1]) {
//      a[i++] = a[q];
//    }
//  }
//
//  a.length = i;
//  return a;
//}
//    doSmth(randomArray);
//    
//    for(var i = 0; i < randomArray.length; i++){
//        randomArray[i] = parseInt(randomArray[i]);
//    }
//    
//function compareNumeric(a, b) {
//  if (a > b) return 1;
//  if (a < b) return -1;
//}
//    
//randomArray.sort(compareNumeric);
////console.log(randomArray); 
//var kil = 0;
//for(var i = 0; i < randomArray.length; i++){
//  var j = i + 1; 
//  if((randomArray[j] - randomArray[i]) == 1){
//    kil++;
//
//  }
//} 
//if(kil == 4){
//  //console.log("strit");
//    boolArray[3] = true;
//    
//}  
//
//}
//stright (randomArray);
function straight(ArrayObjects){
    var Arrayhelp = [];
    for(var i = 0; i < ArrayObjects.length; i++){
        Arrayhelp[i] = [parseInt(ArrayObjects[i].title),parseInt(ArrayObjects[i].id)];
    }
    console.log("Arrayhelp");
    var ArraySort = MySort(Arrayhelp);
    console.log(MySort(Arrayhelp));
    
    console.log("Arrayhelp");
    console.log(Arrayhelp);
   
}
function MySort(Array){
    var NewArray = [];
    
    while(Array.length > 0){
        
        console.log("Array.length");
        console.log(Array.length);
        var Max = 0;
        var Id = 0;
        var del = 0;
        for(var j = 0; j < Array.length; j++){
            if(Array[j][0] > Max) { Max = Array[j][0]; Id = Array[j][1]; del = j};
        }
        NewArray.push([Max,Id]);
        Array.splice(del,1);
    }
//        console.log("NewArray");
//        console.log(NewArray);
//        console.log("Array");
//        console.log(Array);
    return NewArray;
}

var ArrayforFlesh = [];
var countforFlesh = [];

function flesh(obj){    
    var flesh_Array = [];
    var bubna = [];
    var hrest = [];
    var cherv = [];
    var picka = [];
    
    var Cbubna = 0;
    var Chrest = 0;
    var Ccherv = 0;
    var Cpicka = 0;
    
    for(key in obj){
        num = 0;
        if(obj[key].lear == 'bubna'){
        bubna[Cbubna++] = obj[key].id;
        }
        if(obj[key].lear == 'hrest'){
        hrest[Chrest++] = obj[key].id;
        }
        if(obj[key].lear == 'cherv'){
        cherv[Ccherv++] = obj[key].id;
        }
        if(obj[key].lear == 'picka'){
        picka[Cpicka++] = obj[key].id;
        }
    }
    flesh_Array[0] = bubna;
    flesh_Array[1] = hrest;
    flesh_Array[2] = cherv;
    flesh_Array[3] = picka;
    
    for(var i = 0; i < flesh_Array.length; i++){
    if(flesh_Array[i].length >= 5){
       console.log('flesh');
        boolArray[4] = true;
        return  flesh_Array[i];
       }}
    
    console.log(flesh_Array);
}
//flesh(arr_table);



function other(ArrayObjects){ 
var k2 = [],
    k3 = [],
    k4 = [],
    k5 = [],
    k6 = [],
    k7 = [],
    k8 = [],
    k9 = [],
    k10 = [],
    v = [],
    d = [],
    k = [],
    a = [],
    cou2 = 0,
    cou3 = 0,
    cou4 = 0,
    cou5 = 0,
    cou6 = 0,
    cou7 = 0,
    cou8 = 0,
    cou9 = 0,
    cou10 = 0,
    couv = 0,
    coud = 0,
    couk = 0,
    coua = 0;
    var other_array = [];
    for(key in ArrayObjects){
       switch (ArrayObjects[key].title){
            case '2':  k2[cou2++] = ArrayObjects[key].id ;    break; 
            case '3':  k3[cou3++] = ArrayObjects[key].id ;    break; 
            case '4' : k4[cou4++] = ArrayObjects[key].id ;    break; 
            case '5' : k5[cou5++] = ArrayObjects[key].id ;    break; 
            case '6' : k6[cou6++] = ArrayObjects[key].id ;    break; 
            case '7' : k7[cou7++] = ArrayObjects[key].id ;    break; 
            case '8' : k8[cou8++] = ArrayObjects[key].id ;    break; 
            case '9' : k9[cou9++] = ArrayObjects[key].id ;    break; 
            case '10': k10[cou10++] = ArrayObjects[key].id ;    break; 
            case '11' : v[couv++] = ArrayObjects[key].id ;    break; 
            case '12' : d[coud++] = ArrayObjects[key].id ;    break; 
            case '13' : k[couk++] = ArrayObjects[key].id ;    break; 
            case '14' : a[coua++] = ArrayObjects[key].id ;    break; 
  
  
}
        //console.log(obj[key].title);
    }
other_array[0] = k2;
other_array[1] = k3;
other_array[2] = k4;
other_array[3] = k5;
other_array[4] = k6;
other_array[5] = k7;
other_array[6] = k8;
other_array[7] = k9;
other_array[8] = k10;
other_array[9] = v;
other_array[10] = d;
other_array[11] = k;
other_array[12] = a;
//console.log(other_array);
    var twoSet = 0;
    for(var i=0;i<other_array.length;i++){
        if(other_array[i].length == 2){
        // console.log("para" + i);
            ArrayPossibleCombinations[countCombinations++] = {
                name: "para",
                first: other_array[i][0],
                second: other_array[i][1]
            }
            boolArray[0] = true;
        }  
        if(other_array[i].length == 3){
         //console.log("set" + i);
            
            if(twoSet == 0){
            ArrayPossibleCombinations[countCombinations++] = {
                name: "set",
                first: other_array[i][0],
                second: other_array[i][1],
                third: other_array[i][2]
            }
            boolArray[2] = true;
                twoSet++;
            } else {
                ArrayPossibleCombinations[countCombinations++] = {
                name: "twoset",
                first: other_array[i][0],
                second: other_array[i][1],
                third: other_array[i][2]
            }
            }
        }
        if(other_array[i].length == 4){
        // console.log("kare" + i); 
            ArrayPossibleCombinations[countCombinations++] = {
                name: "kare",
                first: other_array[i][0],
                second: other_array[i][1],
                third: other_array[i][2],
                fourth: other_array[i][3]
            }
         boolArray[6] = true;
        }
    };
    
    var cout_d_para = 0;
    for(var i=0;i<other_array.length;i++){
        if(other_array[i] == 2){
         cout_d_para++;
        }  
        
    };
    if(cout_d_para >= 2 ) boolArray[1] = true;
}

function highcard(ArrayObjects){
    var MaxCard = 0;
    for(var i = 0; i < ArrayObjects.length; i++){
        console.log(MaxCard);
        var parseId = parseFloat(ArrayObjects[i].id);
        if(parseId  > MaxCard) MaxCard = parseId; 
    }
    return MaxCard;
}

//other(arr_table);
/*
     виконано 2 з 16.....
1. зробити перевірку на однаковість карт тобто стріт і флеш
2. доробити функцію стріт флеш 
3. дороьити функцію флеш рояль
4. вимкнути аддевентлістнер після двох натискань
5. зробити перевірку не через сет інтервал
6. при можливості додати двох гравців
7. зробити анімацію розгортання карти                                                                          ......зроблено
8. вирівняти карти по центру
9. виводити значення (стріт пара тощо)             50%
10. зробити перевірку на старшу карту                                                                          ......зроблено
11. по можливості зменшити код винести окремі допоміжні функції окремо
12. колоду перетворити в джсон
13. уникнути трансліту
14. вирівняти код
15. перевірити фулл хаус якщо є два сети визначити більший фул хаус з можливістю додання гравця
16. перевірити дві пари якщо є три пари вивести найбільші
*/