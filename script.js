function GPA60(){
  //variables for courses having 20 marks
  var qp21 = 1
  var qp22 = 1.5
  var qp23 = 2
  var qp24 = 2.33
  var qp25 = 2.67
  var qp26 = 3
  var qp27 = 3.33
  var qp28 = 3.67
  var qp29 = 4
  var qp20 = 0
  //variables for courses having 60 marks
  var qp61 = 3
  var qp62 = 3.5
  var qp63 = 4
  var qp64 = 4.5
  var qp65 = 5
  var qp66 = 5.5
  var qp67 = 6
  var qp68 = 6.33
  var qp69 = 6.67
  var qp70 = 7
  var qp71 = 7.33
  var qp72 = 7.67
  var qp73 = 8
  var qp74 = 8.33
  var qp75 = 8.67
  var qp76 = 9
  var qp77 = 9.33
  var qp78 = 9.67
  var qp79 = 10
  var qp80 = 10.33
  var qp81 = 10.67
  var qp82 = 11
  var qp83 = 11.33
  var qp84 = 11.67
  var qp85 = 12
  //variables for courses having 40 marks
  var qp41 = 2
  var qp42 = 2.5
  var qp43 = 3
  var qp44 = 3.5
  var qp45 = 4
  var qp46 = 4.33
  var qp47 = 4.67
  var qp48 = 5
  var qp49 = 5.33
  var qp50 = 5.67
  var qp51 = 6
  var qp52 = 6.33
  var qp53 = 6.67
  var qp54 = 7
  var qp55 = 7.33
  var qp56 = 7.67
  var qp57 = 8
  var qp86 = 4
  //variable for courses having 80 marks
  var qp87 = 4.5
  var qp88 = 5
  var qp89 = 5.5
  var qp90 = 6
  var qp91 = 6.5
  var qp91 = 7
  var qp92 = 7.5
  var qp93 = 8
  var qp94 = 8.33
  var qp95 = 8.67
  var qp96 = 9
  var qp97 = 9.33
  var qp98 = 9.67
  var qp99 = 10
  var qp100 = 10.33
  var qp101 = 10.67
  var qp102 = 11
  var qp103 = 11.33
  var qp104 = 11.67
  var qp105 = 12
  var qp106 = 12.33
  var qp107 = 12.67
  var qp108 = 13
  var qp109 = 13.33
  var qp110 = 13.67
  var qp111 = 14
  var qp112 = 14.33
  var qp113 = 14.67
  var qp114 = 15
  var qp116 = 15.33
  var qp117 = 15.67
  var qp118 = 16


























  var a = document.getElementById("subject1o").value;
  var b = document.getElementById("subject2o").value;
  var c = document.getElementById("subject3o").value;
  var d = document.getElementById("subject4o").value;
  var e = document.getElementById("subject5o").value;
  var f = document.getElementById("subject6o").value;
  var g = document.getElementById("crehrs").value;
  var h = document.getElementById("subject1t").value;
  var i = document.getElementById("subject2t").value;
  var j = document.getElementById("subject3t").value;
  var k = document.getElementById("subject4t").value;
  var l = document.getElementById("subject5t").value;
  var m = document.getElementById("subject6t").value;


  if ((a == 24) && (h == 60)) {
      var a1 = qp61;
  }else if ((a == 25) && (h == 60)) {
    var a1 = qp62;
  }else if ((a == 26) && (h == 60)) {
    var a1 = qp63;
  }else if ((a == 27) && (h == 60)) {
    var a1 = qp64;
  }else if ((a == 28) && (h == 60)) {
    var a1 = qp65;
  }else if ((a == 29) && (h == 60)) {
    var a1 = qp66;
  }else if ((a == 30) && (h == 60)) {
    var a1 = qp67;
  }else if ((a == 31) && (h == 60)) {
    var a1 = qp68;
  }else if ((a == 32) && (h == 60)) {
    var a1 = qp69;
  }else if ((a == 33) && (h == 60)) {
    var a1 = qp70;
  }else if ((a == 34) && (h == 60)) {
    var a1 = qp71;
  }else if ((a == 35) && (h == 60)) {
    var a1 = qp72;
  }else if ((a == 36) && (h == 60)) {
    var a1 = qp73;
  }else if ((a == 37) && (h == 60)) {
    var a1 = qp74;
  }else if ((a == 38) && (h == 60)) {
    var a1 = qp75;
  }else if ((a == 39) && (h == 60)) {
    var a1 = qp76;
  }else if ((a == 40) && (h == 60)) {
    var a1 = qp77;
  }else if ((a == 41) && (h == 60)) {
    var a1 = qp78;
  }else if ((a == 42) && (h == 60)) {
    var a1 = qp79;
  }else if ((a == 43) && (h == 60)) {
    var a1 = qp80;
  }else if ((a == 44) && (h == 60)) {
    var a1 = qp81;
  }else if ((a == 45) && (h == 60)) {
    var a1 = qp82;
  }else if ((a == 46) && (h == 60)) {
    var a1 = qp83;
  }else if ((a == 47) && (h == 60)) {
    var a1 = qp84;
  }else if ((a >= 48) && (a <= 60) && (h == 60)) {
    var a1 = qp85;
  }else if ((a == 8) && (h == 20)) {
    var a1 = qp21;
  }else if ((a == 9) && (h == 20)) {
    var a1 = qp22;
  }else if ((a == 10) && (h == 20)) {
    var a1 = qp23;
  }else if ((a == 11) && (h == 20)) {
    var a1 = qp24;
  }else if ((a == 12) && (h == 20)) {
    var a1 = qp25;
  }else if ((a == 13) && (h == 20)) {
    var a1 = qp26;
  }else if ((a == 14) && (h == 20)) {
    var a1 = qp27;
  }else if ((a == 15) && (h == 20)) {
    var a1 = qp28;
  }else if ((a >= 16) && (a <= 20) && (h == 20)) {
    var a1 = qp29;
  }else if ((a == 16) && (h == 40)) {
    var a1 = qp41;
  }else if ((a == 17) && (h == 40)) {
    var a1 = qp42;
  }else if ((a == 18) && (h == 40)) {
    var a1 = qp43;
  }else if ((a == 19) && (h == 40)) {
    var a1 = qp44;
  }else if ((a == 20) && (h == 40)) {
    var a1 = qp45;
  }else if ((a == 21) && (h == 40)) {
    var a1 = qp46;
  }else if ((a == 22) && (h == 40)) {
    var a1 = qp47;
  }else if ((a == 23) && (h == 40)) {
    var a1 = qp48;
  }else if ((a == 24) && (h == 40)) {
    var a1 = qp49;
  }else if ((a == 25) && (h == 40)) {
    var a1 = qp50;
  }else if ((a == 26) && (h == 40)) {
    var a1 = qp51;
  }else if ((a == 27) && (h == 40)) {
    var a1 = qp52;
  }else if ((a == 28) && (h == 40)) {
    var a1 = qp53;
  }else if ((a == 29) && (h == 40)) {
    var a1 = qp54;
  }else if ((a == 30) && (h == 40)) {
    var a1 = qp55;
  }else if ((a == 31) && (h == 40)) {
    var a1 = qp56;
  }else if ((a >= 32) && (a <= 40) && (h == 40)){
    var a1 = qp57;
  }else if ((a == 32) && (h == 80)) {
    var a1 = qp86;
  }else if ((a == 33) && (h == 80)) {
    var a1 = qp87;
  }else if ((a == 34) && (h == 80)) {
    var a1 = qp88;
  }else if ((a == 35) && (h == 80)) {
    var a1 = qp89;
  }else if ((a == 36) && (h == 80)) {
    var a1 = qp90;
  }else if ((a == 37) && (h == 80)) {
    var a1 = qp91;
  }else if ((a == 38) && (h == 80)) {
    var a1 = qp92;
  }else if ((a == 39) && (h == 80)) {
    var a1 = qp93;
  }else if ((a == 40) && (h == 80)) {
    var a1 = qp94;
  }else if ((a == 41) && (h == 80)) {
    var a1 = qp95;
  }else if ((a == 42) && (h == 80)) {
    var a1 = qp96;
  }else if ((a == 43) && (h == 80)) {
    var a1 = qp97;
  }else if ((a == 44) && (h == 80)) {
    var a1 = qp98;
  }else if ((a == 45) && (h == 80)) {
    var a1 = qp99;
  }else if ((a == 46) && (h == 80)) {
    var a1 = qp100;
  }else if ((a == 47) && (h == 80)) {
    var a1 = qp101;
  }else if ((a == 48) && (h == 80)) {
    var a1 = qp102;
  }else if ((a == 49) && (h == 80)) {
    var a1 = qp103;
  }else if ((a == 50) && (h == 80)) {
    var a1 = qp104;
  }else if ((a == 51) && (h == 80)) {
    var a1 = qp105;
  }else if ((a == 52) && (h == 80)) {
    var a1 = qp106;
  }else if ((a == 53) && (h == 80)) {
    var a1 = qp107;
  }else if ((a == 54) && (h == 80)) {
    var a1 = qp108;
  }else if ((a == 55) && (h == 80)) {
    var a1 = qp109;
  }else if ((a == 56) && (h == 80)) {
    var a1 = qp110;
  }else if ((a == 57) && (h == 80)) {
    var a1 = qp111;
  }else if ((a == 58) && (h == 80)) {
    var a1 = qp112;
  }else if ((a == 59) && (h == 80)) {
    var a1 = qp113;
  }else if ((a == 60) && (h == 80)) {
    var a1 = qp114;
  }else if ((a == 61) && (h == 80)) {
    var a1 = qp115;
  }else if ((a == 62) && (h == 80)) {
    var a1 = qp116;
  }else if ((a == 63) && (h == 80)) {
    var a1 = qp117;
  }else if ((a >= 64) && (a <= 80) && (h == 80)) {
    var a1 = qp118;
  }else {
    var a1 = qp20;
  }


  if ((b == 24) && (i == 60))  {
      var b1 = qp61;
  }else if ((b == 25) && (i == 60)) {
    var b1 = qp62;
  }else if ((b == 26) && (i == 60)) {
    var b1 = qp63;
  }else if ((b == 27) && (i == 60)) {
    var b1 = qp64;
  }else if ((b == 28) && (i == 60)) {
    var b1 = qp65;
  }else if ((b == 29) && (i == 60)) {
    var b1 = qp66;
  }else if ((b == 30) && (i == 60)) {
    var b1 = qp67;
  }else if ((b == 31) && (i == 60)) {
    var b1 = qp68;
  }else if ((b == 32) && (i == 60)) {
    var b1 = qp69;
  }else if ((b == 33) && (i == 60)) {
    var b1 = qp70;
  }else if ((b == 34) && (i == 60)) {
    var b1 = qp71;
  }else if ((b == 35) && (i == 60)) {
    var b1 = qp72;
  }else if ((b == 36) && (i == 60)) {
    var b1 = qp73;
  }else if ((b == 37) && (i == 60)) {
    var b1 = qp74;
  }else if ((b == 38) && (i == 60)) {
    var b1 = qp75;
  }else if ((b == 39) && (i == 60)) {
    var b1 = qp76;
  }else if ((b == 40) && (i == 60)) {
    var b1 = qp77;
  }else if ((b == 41) && (i == 60)) {
    var b1 = qp78;
  }else if ((b == 42) && (i == 60)) {
    var b1 = qp79;
  }else if ((b == 43) && (i == 60)) {
    var b1 = qp80;
  }else if ((b == 44) && (i == 60)) {
    var b1 = qp81;
  }else if ((b == 45) && (i == 60)) {
    var b1 = qp82;
  }else if ((b == 46) && (i == 60)) {
    var b1 = qp83;
  }else if ((b == 47) && (i == 60)) {
    var b1 = qp84;
  }else if ((b >= 48) && (b <= 60) && (i == 60)) {
    var b1 = qp85;
  }else if ((b == 8) && (i == 20)) {
    var b1 = qp21;
  }else if ((b == 9) && (i == 20)) {
    var b1 = qp22;
  }else if ((b == 10) && (i == 20)) {
    var b1 = qp23;
  }else if ((b == 11) && (i == 20)) {
    var b1 = qp24;
  }else if ((b == 12) && (i == 20)) {
    var b1 = qp25;
  }else if ((b == 13) && (i == 20)) {
    var b1 = qp26;
  }else if ((b == 14) && (i == 20)) {
    var b1 = qp27;
  }else if ((b == 15) && (i == 20)) {
    var b1 = qp28;
  }else if ((b >= 16) && (b <= 20) && (i == 20)) {
    var b1 = qp29;
  }else if ((b == 16) && (i == 40)) {
    var b1 = qp41;
  }else if ((b == 17) && (i == 40)) {
    var b1 = qp42;
  }else if ((b == 18) && (i == 40)) {
    var b1 = qp43;
  }else if ((b == 19) && (i == 40)) {
    var b1 = qp44;
  }else if ((b == 20) && (i == 40)) {
    var b1 = qp45;
  }else if ((b == 21) && (i == 40)) {
    var b1 = qp46;
  }else if ((b == 22) && (i == 40)) {
    var b1 = qp47;
  }else if ((b == 23) && (i == 40)) {
    var b1 = qp48;
  }else if ((b == 24) && (i == 40)) {
    var b1 = qp49;
  }else if ((b == 25) && (i == 40)) {
    var b1 = qp50;
  }else if ((b == 26) && (i == 40)) {
    var b1 = qp51;
  }else if ((b == 27) && (i == 40)) {
    var b1 = qp52;
  }else if ((b == 28) && (i == 40)) {
    var b1 = qp53;
  }else if ((b == 29) && (i == 40)) {
    var b1 = qp54;
  }else if ((b == 30) && (i == 40)) {
    var b1 = qp55;
  }else if ((b == 31) && (i == 40)) {
    var b1 = qp56;
  }else if ((b >= 32) && (b <= 40) && (i == 40)){
    var b1 = qp57;
  }else if ((b == 32) && (i == 80)) {
    var b1 = qp86;
  }else if ((b == 33) && (i == 80)) {
    var b1 = qp87;
  }else if ((b == 34) && (i == 80)) {
    var b1 = qp88;
  }else if ((b == 35) && (i == 80)) {
    var b1 = qp89;
  }else if ((b == 36) && (i == 80)) {
    var b1 = qp90;
  }else if ((b == 37) && (i == 80)) {
    var b1 = qp91;
  }else if ((b == 38) && (i == 80)) {
    var b1 = qp92;
  }else if ((b == 39) && (i == 80)) {
    var b1 = qp93;
  }else if ((b == 40) && (i == 80)) {
    var b1 = qp94;
  }else if ((b == 41) && (i == 80)) {
    var b1 = qp95;
  }else if ((b == 42) && (i == 80)) {
    var b1 = qp96;
  }else if ((b == 43) && (i == 80)) {
    var b1 = qp97;
  }else if ((b == 44) && (i == 80)) {
    var b1 = qp98;
  }else if ((b == 45) && (i == 80)) {
    var b1 = qp99;
  }else if ((b == 46) && (i == 80)) {
    var b1 = qp100;
  }else if ((b == 47) && (i == 80)) {
    var b1 = qp101;
  }else if ((b == 48) && (i == 80)) {
    var b1 = qp102;
  }else if ((b == 49) && (i == 80)) {
    var b1 = qp103;
  }else if ((b == 50) && (i == 80)) {
    var b1 = qp104;
  }else if ((b == 51) && (i == 80)) {
    var b1 = qp105;
  }else if ((b == 52) && (i == 80)) {
    var b1 = qp106;
  }else if ((b == 53) && (i == 80)) {
    var b1 = qp107;
  }else if ((b == 54) && (i == 80)) {
    var b1 = qp108;
  }else if ((b == 55) && (i == 80)) {
    var b1 = qp109;
  }else if ((b == 56) && (i == 80)) {
    var b1 = qp110;
  }else if ((b == 57) && (i == 80)) {
    var b1 = qp111;
  }else if ((b == 58) && (i == 80)) {
    var b1 = qp112;
  }else if ((b == 59) && (i == 80)) {
    var b1 = qp113;
  }else if ((b == 60) && (i == 80)) {
    var b1 = qp114;
  }else if ((b == 61) && (i == 80)) {
    var b1 = qp115;
  }else if ((b == 62) && (i == 80)) {
    var b1 = qp116;
  }else if ((b == 63) && (i == 80)) {
    var b1 = qp117;
  }else if ((b >= 64) && (b <= 80) && (i == 80)) {
    var b1 = qp118;
  }else {
    var b1 = qp20;
  }



  if ((c == 24) && (j == 60)) {
      var c1 = qp61;
  }else if ((c == 25) && (j == 60)) {
    var c1 = qp62;
  }else if ((c == 26) && (j == 60)) {
    var c1 = qp63;
  }else if ((c == 27) && (j == 60)) {
    var c1 = qp64;
  }else if ((c == 28) && (j == 60)) {
    var c1 = qp65;
  }else if ((c == 29) && (j == 60)) {
    var c1 = qp66;
  }else if ((c == 30) && (j == 60)) {
    var c1 = qp67;
  }else if ((c == 31) && (j == 60)) {
    var c1 = qp68;
  }else if ((c == 32) && (j == 60)) {
    var c1 = qp69;
  }else if ((c == 33) && (j == 60)) {
    var c1 = qp70;
  }else if ((c == 34) && (j == 60)) {
    var c1 = qp71;
  }else if ((c == 35) && (j == 60)) {
    var c1 = qp72;
  }else if ((c == 36) && (j == 60)) {
    var c1 = qp73;
  }else if ((c == 37) && (j == 60)) {
    var c1 = qp74;
  }else if ((c == 38) && (j == 60)) {
    var c1 = qp75;
  }else if ((c == 39) && (j == 60)) {
    var c1 = qp76;
  }else if ((c == 40) && (j == 60)) {
    var c1 = qp77;
  }else if ((c == 41) && (j == 60)) {
    var c1 = qp78;
  }else if ((c == 42) && (j == 60)) {
    var c1 = qp79;
  }else if ((c == 43) && (j == 60)) {
    var c1 = qp80;
  }else if ((c == 44) && (j == 60)) {
    var c1 = qp81;
  }else if ((c == 45) && (j == 60)) {
    var c1 = qp82;
  }else if ((c == 46) && (j == 60)) {
    var c1 = qp83;
  }else if ((c == 47) && (j == 60)) {
    var c1 = qp84;
  }else if ((c >= 48) && (c <= 60) && (j == 60)) {
    var c1 = qp85;
  }else if ((c == 8) && (j == 20)) {
    var c1 = qp21;
  }else if ((c == 9) && (j == 20)) {
    var c1 = qp22;
  }else if ((c == 10) && (j == 20)) {
    var c1 = qp23;
  }else if ((c == 11) && (j == 20)) {
    var c1 = qp24;
  }else if ((c == 12) && (j == 20)) {
    var c1 = qp25;
  }else if ((c == 13) && (j == 20)) {
    var c1 = qp26;
  }else if ((c == 14) && (j == 20)) {
    var c1 = qp27;
  }else if ((c == 15) && (j == 20)) {
    var c1 = qp28;
  }else if ((c >= 16) && (c <= 20) && (j == 20)) {
    var c1 = qp29;
  }else if ((c == 16) && (j == 40)) {
    var c1 = qp41;
  }else if ((c == 17) && (j == 40)) {
    var c1 = qp42;
  }else if ((c == 18) && (j == 40)) {
    var c1 = qp43;
  }else if ((c == 19) && (j == 40)) {
    var c1 = qp44;
  }else if ((c == 20) && (j == 40)) {
    var c1 = qp45;
  }else if ((c == 21) && (j == 40)) {
    var c1 = qp46;
  }else if ((c == 22) && (j == 40)) {
    var c1 = qp47;
  }else if ((c == 23) && (j == 40)) {
    var c1 = qp48;
  }else if ((c == 24) && (j == 40)) {
    var c1 = qp49;
  }else if ((c == 25) && (j == 40)) {
    var c1 = qp50;
  }else if ((c == 26) && (j == 40)) {
    var c1 = qp51;
  }else if ((c == 27) && (j == 40)) {
    var c1 = qp52;
  }else if ((c == 28) && (j == 40)) {
    var c1 = qp53;
  }else if ((c == 29) && (j == 40)) {
    var c1 = qp54;
  }else if ((c == 30) && (j == 40)) {
    var c1 = qp55;
  }else if ((c == 31) && (j == 40)) {
    var c1 = qp56;
  }else if ((c >= 32) && (c <= 40) && (j == 40)){
    var c1 = qp57;
  }else if ((c == 32) && (j == 80)) {
    var c1 = qp86;
  }else if ((c == 33) && (j == 80)) {
    var c1 = qp87;
  }else if ((c == 34) && (j == 80)) {
    var c1 = qp88;
  }else if ((c == 35) && (j == 80)) {
    var c1 = qp89;
  }else if ((c == 36) && (j == 80)) {
    var c1 = qp90;
  }else if ((c == 37) && (j == 80)) {
    var c1 = qp91;
  }else if ((c == 38) && (j == 80)) {
    var c1 = qp92;
  }else if ((c == 39) && (j == 80)) {
    var c1 = qp93;
  }else if ((c == 40) && (j == 80)) {
    var c1 = qp94;
  }else if ((c == 41) && (j == 80)) {
    var c1 = qp95;
  }else if ((c == 42) && (j == 80)) {
    var c1 = qp96;
  }else if ((c == 43) && (j == 80)) {
    var c1 = qp97;
  }else if ((c == 44) && (j == 80)) {
    var c1 = qp98;
  }else if ((c == 45) && (j == 80)) {
    var c1 = qp99;
  }else if ((c == 46) && (j == 80)) {
    var c1 = qp100;
  }else if ((c == 47) && (j == 80)) {
    var c1 = qp101;
  }else if ((c == 48) && (j == 80)) {
    var c1 = qp102;
  }else if ((c == 49) && (j == 80)) {
    var c1 = qp103;
  }else if ((c == 50) && (j == 80)) {
    var c1 = qp104;
  }else if ((c == 51) && (j == 80)) {
    var c1 = qp105;
  }else if ((c == 52) && (j == 80)) {
    var c1 = qp106;
  }else if ((c == 53) && (j == 80)) {
    var c1 = qp107;
  }else if ((c == 54) && (j == 80)) {
    var c1 = qp108;
  }else if ((c == 55) && (j == 80)) {
    var c1 = qp109;
  }else if ((c == 56) && (j == 80)) {
    var c1 = qp110;
  }else if ((c == 57) && (j == 80)) {
    var c1 = qp111;
  }else if ((c == 58) && (j == 80)) {
    var c1 = qp112;
  }else if ((c == 59) && (j == 80)) {
    var c1 = qp113;
  }else if ((c == 60) && (j == 80)) {
    var c1 = qp114;
  }else if ((c == 61) && (j == 80)) {
    var c1 = qp115;
  }else if ((c == 62) && (j == 80)) {
    var c1 = qp116;
  }else if ((c == 63) && (j == 80)) {
    var c1 = qp117;
  }else if ((c >= 64) && (c <= 80) && (j == 80)) {
    var c1 = qp118;
  }else {
    var c1 = qp20;
  }


  if ((d == 24) && (k == 60)) {
      var d1 = qp61;
  }else if ((d == 25) && (k == 60)) {
    var d1 = qp62;
  }else if ((d == 26) && (k == 60)) {
    var d1 = qp63;
  }else if ((d == 27) && (k == 60)) {
    var d1 = qp64;
  }else if ((d == 28) && (k == 60)) {
    var d1 = qp65;
  }else if ((d == 29) && (k == 60)) {
    var d1 = qp66;
  }else if ((d == 30) && (k == 60)) {
    var d1 = qp67;
  }else if ((d == 31) && (k == 60)) {
    var d1 = qp68;
  }else if ((d == 32) && (k == 60)) {
    var d1 = qp69;
  }else if ((d == 33) && (k == 60)) {
    var d1 = qp70;
  }else if ((d == 34) && (k == 60)) {
    var d1 = qp71;
  }else if ((d == 35) && (k == 60)) {
    var d1 = qp72;
  }else if ((d == 36) && (k == 60)) {
    var d1 = qp73;
  }else if ((d == 37) && (k == 60)) {
    var d1 = qp74;
  }else if ((d == 38) && (k == 60)) {
    var d1 = qp75;
  }else if ((d == 39) && (k == 60)) {
    var d1 = qp76;
  }else if ((d == 40) && (k == 60)) {
    var d1 = qp77;
  }else if ((d == 41) && (k == 60)) {
    var d1 = qp78;
  }else if ((d == 42) && (k == 60)) {
    var d1 = qp79;
  }else if ((d == 43) && (k == 60)) {
    var d1 = qp80;
  }else if ((d == 44) && (k == 60)) {
    var d1 = qp81;
  }else if ((d == 45) && (k == 60)) {
    var d1 = qp82;
  }else if ((d == 46) && (k == 60)) {
    var d1 = qp83;
  }else if ((d == 47) && (k == 60)) {
    var d1 = qp84;
  }else if ((d >= 48) && (d <= 60) && (k == 60)) {
    var d1 = qp85;
  }else if ((d == 8) && (k == 20)) {
    var d1 = qp21;
  }else if ((d == 9) && (k == 20)) {
    var d1 = qp22;
  }else if ((d == 10) && (k == 20)) {
    var d1 = qp23;
  }else if ((d == 11) && (k == 20)) {
    var d1 = qp24;
  }else if ((d == 12) && (k == 20)) {
    var d1 = qp25;
  }else if ((d == 13) && (k == 20)) {
    var d1 = qp26;
  }else if ((d == 14) && (k == 20)) {
    var d1 = qp27;
  }else if ((d == 15) && (k == 20)) {
    var d1 = qp28;
  }else if ((d >= 16) && (d <= 20) && (k == 20)) {
    var d1 = qp29;
  }else if ((d == 16) && (k == 40)) {
    var d1 = qp41;
  }else if ((d == 17) && (k == 40)) {
    var d1 = qp42;
  }else if ((d == 18) && (k == 40)) {
    var d1 = qp43;
  }else if ((d == 19) && (k == 40)) {
    var d1 = qp44;
  }else if ((d == 20) && (k == 40)) {
    var d1 = qp45;
  }else if ((d == 21) && (k == 40)) {
    var d1 = qp46;
  }else if ((d == 22) && (k == 40)) {
    var d1 = qp47;
  }else if ((d == 23) && (k == 40)) {
    var d1 = qp48;
  }else if ((d == 24) && (k == 40)) {
    var d1 = qp49;
  }else if ((d == 25) && (k == 40)) {
    var d1 = qp50;
  }else if ((d == 26) && (k == 40)) {
    var d1 = qp51;
  }else if ((d == 27) && (k == 40)) {
    var d1 = qp52;
  }else if ((d == 28) && (k == 40)) {
    var d1 = qp53;
  }else if ((d == 29) && (k == 40)) {
    var d1 = qp54;
  }else if ((d == 30) && (k == 40)) {
    var d1 = qp55;
  }else if ((d == 31) && (k == 40)) {
    var d1 = qp56;
  }else if ((d >= 32) && (d <= 40) && (k == 40)){
    var d1 = qp57;
  }else if ((d == 32) && (k == 80)) {
    var d1 = qp86;
  }else if ((d == 33) && (k == 80)) {
    var d1 = qp87;
  }else if ((d == 34) && (k == 80)) {
    var d1 = qp88;
  }else if ((d == 35) && (k == 80)) {
    var d1 = qp89;
  }else if ((d == 36) && (k == 80)) {
    var d1 = qp90;
  }else if ((d == 37) && (k == 80)) {
    var d1 = qp91;
  }else if ((d == 38) && (k == 80)) {
    var d1 = qp92;
  }else if ((d == 39) && (k == 80)) {
    var d1 = qp93;
  }else if ((d == 40) && (k == 80)) {
    var d1 = qp94;
  }else if ((d == 41) && (k == 80)) {
    var d1 = qp95;
  }else if ((d == 42) && (k == 80)) {
    var d1 = qp96;
  }else if ((d == 43) && (k == 80)) {
    var d1 = qp97;
  }else if ((d == 44) && (k == 80)) {
    var d1 = qp98;
  }else if ((d == 45) && (k == 80)) {
    var d1 = qp99;
  }else if ((d == 46) && (k == 80)) {
    var d1 = qp100;
  }else if ((d == 47) && (k == 80)) {
    var d1 = qp101;
  }else if ((d == 48) && (k == 80)) {
    var d1 = qp102;
  }else if ((d == 49) && (k == 80)) {
    var d1 = qp103;
  }else if ((d == 50) && (k == 80)) {
    var d1 = qp104;
  }else if ((d == 51) && (k == 80)) {
    var d1 = qp105;
  }else if ((d == 52) && (k == 80)) {
    var d1 = qp106;
  }else if ((d == 53) && (k == 80)) {
    var d1 = qp107;
  }else if ((d == 54) && (k == 80)) {
    var d1 = qp108;
  }else if ((d == 55) && (k == 80)) {
    var d1 = qp109;
  }else if ((d == 56) && (k == 80)) {
    var d1 = qp110;
  }else if ((d == 57) && (k == 80)) {
    var d1 = qp111;
  }else if ((d == 58) && (k == 80)) {
    var d1 = qp112;
  }else if ((d == 59) && (k == 80)) {
    var d1 = qp113;
  }else if ((d == 60) && (k == 80)) {
    var d1 = qp114;
  }else if ((d == 61) && (k == 80)) {
    var d1 = qp115;
  }else if ((d == 62) && (k == 80)) {
    var d1 = qp116;
  }else if ((d == 63) && (k == 80)) {
    var d1 = qp117;
  }else if ((d >= 64) && (d <= 80) && (k == 80)) {
    var d1 = qp118;
  }else {
    var d1 = qp20;
  }



  if ((e == 24) && (l == 60)) {
      var e1 = qp61;
  }else if ((e == 25) && (l == 60)) {
    var e1 = qp62;
  }else if ((e == 26) && (l == 60)) {
    var e1 = qp63;
  }else if ((e == 27) && (l == 60)) {
    var e1 = qp64;
  }else if ((e == 28) && (l == 60)) {
    var e1 = qp65;
  }else if ((e == 29) && (l == 60)) {
    var e1 = qp66;
  }else if ((e == 30) && (l == 60)) {
    var e1 = qp67;
  }else if ((e == 31) && (l == 60)) {
    var e1 = qp68;
  }else if ((e == 32) && (l == 60)) {
    var e1 = qp69;
  }else if ((e == 33) && (l == 60)) {
    var e1 = qp70;
  }else if ((e == 34) && (l == 60)) {
    var e1 = qp71;
  }else if ((e == 35) && (l == 60)) {
    var e1 = qp72;
  }else if ((e == 36) && (l == 60)) {
    var e1 = qp73;
  }else if ((e == 37) && (l == 60)) {
    var e1 = qp74;
  }else if ((e == 38) && (l == 60)) {
    var e1 = qp75;
  }else if ((e == 39) && (l == 60)) {
    var e1 = qp76;
  }else if ((e == 40) && (l == 60)) {
    var e1 = qp77;
  }else if ((e == 41) && (l == 60)) {
    var e1 = qp78;
  }else if ((e == 42) && (l == 60)) {
    var e1 = qp79;
  }else if ((e == 43) && (l == 60)) {
    var e1 = qp80;
  }else if ((e == 44) && (l == 60)) {
    var e1 = qp81;
  }else if ((e == 45) && (l == 60)) {
    var e1 = qp82;
  }else if ((e == 46) && (l == 60)) {
    var e1 = qp83;
  }else if ((e == 47) && (l == 60)) {
    var e1 = qp84;
  }else if ((e >= 48) && (e <= 60) && (l == 60)) {
    var e1 = qp85;
  }else if ((e == 8) && (l == 20)) {
    var e1 = qp21;
  }else if ((e == 9) && (l == 20)) {
    var e1 = qp22;
  }else if ((e == 10) && (l == 20)) {
    var e1 = qp23;
  }else if ((e == 11) && (l == 20)) {
    var e1 = qp24;
  }else if ((e == 12) && (l == 20)) {
    var e1 = qp25;
  }else if ((e == 13) && (l == 20)) {
    var e1 = qp26;
  }else if ((e == 14) && (l == 20)) {
    var e1 = qp27;
  }else if ((e == 15) && (l == 20)) {
    var e1 = qp28;
  }else if ((e >= 16) && (e <= 20) && (l == 20)) {
    var e1 = qp29;
  }else if ((e == 16) && (l == 40)) {
    var e1 = qp41;
  }else if ((e == 17) && (l == 40)) {
    var e1 = qp42;
  }else if ((e == 18) && (l == 40)) {
    var e1 = qp43;
  }else if ((e == 19) && (l == 40)) {
    var e1 = qp44;
  }else if ((e == 20) && (l == 40)) {
    var e1 = qp45;
  }else if ((e == 21) && (l == 40)) {
    var e1 = qp46;
  }else if ((e == 22) && (l == 40)) {
    var e1 = qp47;
  }else if ((e == 23) && (l == 40)) {
    var e1 = qp48;
  }else if ((e == 24) && (l == 40)) {
    var e1 = qp49;
  }else if ((e == 25) && (l == 40)) {
    var e1 = qp50;
  }else if ((e == 26) && (l == 40)) {
    var e1 = qp51;
  }else if ((e == 27) && (l == 40)) {
    var e1 = qp52;
  }else if ((e == 28) && (l == 40)) {
    var e1 = qp53;
  }else if ((e == 29) && (l == 40)) {
    var e1 = qp54;
  }else if ((e == 30) && (l== 40)) {
    var e1 = qp55;
  }else if ((e == 31) && (l == 40)) {
    var e1 = qp56;
  }else if ((e >= 32) && (e <= 40) && (l == 40)){
    var e1 = qp57;
  }else if ((e == 32) && (l == 80)) {
    var e1 = qp86;
  }else if ((e == 33) && (l == 80)) {
    var e1 = qp87;
  }else if ((e == 34) && (l == 80)) {
    var e1 = qp88;
  }else if ((e == 35) && (l == 80)) {
    var e1 = qp89;
  }else if ((e == 36) && (l == 80)) {
    var e1 = qp90;
  }else if ((e == 37) && (l == 80)) {
    var e1 = qp91;
  }else if ((e == 38) && (l == 80)) {
    var e1 = qp92;
  }else if ((e == 39) && (l == 80)) {
    var e1 = qp93;
  }else if ((e == 40) && (l == 80)) {
    var e1 = qp94;
  }else if ((e == 41) && (l == 80)) {
    var e1 = qp95;
  }else if ((e == 42) && (l == 80)) {
    var e1 = qp96;
  }else if ((e == 43) && (l == 80)) {
    var e1 = qp97;
  }else if ((e == 44) && (l == 80)) {
    var e1 = qp98;
  }else if ((e == 45) && (l == 80)) {
    var e1 = qp99;
  }else if ((e == 46) && (l == 80)) {
    var e1 = qp100;
  }else if ((e == 47) && (l == 80)) {
    var e1 = qp101;
  }else if ((e == 48) && (l == 80)) {
    var e1 = qp102;
  }else if ((e == 49) && (l == 80)) {
    var e1 = qp103;
  }else if ((e == 50) && (l == 80)) {
    var e1 = qp104;
  }else if ((e == 51) && (l == 80)) {
    var e1 = qp105;
  }else if ((e == 52) && (l == 80)) {
    var e1 = qp106;
  }else if ((e == 53) && (l == 80)) {
    var e1 = qp107;
  }else if ((e == 54) && (l == 80)) {
    var e1 = qp108;
  }else if ((e == 55) && (l == 80)) {
    var e1 = qp109;
  }else if ((e == 56) && (l == 80)) {
    var e1 = qp110;
  }else if ((e == 57) && (l == 80)) {
    var e1 = qp111;
  }else if ((e == 58) && (l == 80)) {
    var e1 = qp112;
  }else if ((e == 59) && (l == 80)) {
    var e1 = qp113;
  }else if ((e == 60) && (l == 80)) {
    var e1 = qp114;
  }else if ((e == 61) && (l == 80)) {
    var e1 = qp115;
  }else if ((e == 62) && (l == 80)) {
    var e1 = qp116;
  }else if ((e == 63) && (l == 80)) {
    var e1 = qp117;
  }else if ((e >= 64) && (e <= 80) && (l == 80)) {
    var e1 = qp118;
  }else {
    var e1 = qp20;
  }




  if ((f == 24) && (m == 60)) {
      var f1 = qp61;
  }else if ((f == 25) && (m == 60)) {
    var f1 = qp62;
  }else if ((f == 26) && (m == 60)) {
    var f1 = qp63;
  }else if ((f == 27) && (m == 60)) {
    var f1 = qp64;
  }else if ((f == 28) && (m == 60)) {
    var f1 = qp65;
  }else if ((f == 29) && (m == 60)) {
    var f1 = qp66;
  }else if ((f == 30) && (m == 60)) {
    var f1 = qp67;
  }else if ((f == 31) && (m == 60)) {
    var f1 = qp68;
  }else if ((f == 32) && (m == 60)) {
    var f1 = qp69;
  }else if ((f == 33) && (m == 60)) {
    var f1 = qp70;
  }else if ((f == 34) && (m == 60)) {
    var f1 = qp71;
  }else if ((f == 35) && (m == 60)) {
    var f1 = qp72;
  }else if ((f == 36) && (m == 60)) {
    var f1 = qp73;
  }else if ((f == 37) && (m == 60)) {
    var f1 = qp74;
  }else if ((f == 38) && (m == 60)) {
    var f1 = qp75;
  }else if ((f == 39) && (m == 60)) {
    var f1 = qp76;
  }else if ((f == 40) && (m == 60)) {
    var f1 = qp77;
  }else if ((f == 41) && (m == 60)) {
    var f1 = qp78;
  }else if ((f == 42) && (m == 60)) {
    var f1 = qp79;
  }else if ((f == 43) && (m == 60)) {
    var f1 = qp80;
  }else if ((f == 44) && (m == 60)) {
    var f1 = qp81;
  }else if ((f == 45) && (m == 60)) {
    var f1 = qp82;
  }else if ((f == 46) && (m == 60)) {
    var f1 = qp83;
  }else if ((f == 47) && (m == 60)) {
    var f1 = qp84;
  }else if ((f >= 48) && (f <= 60) && (m == 60)) {
    var f1 = qp85;
  }else if ((f == 8) && (m == 20)) {
    var f1 = qp21;
  }else if ((f == 9) && (m == 20)) {
    var f1 = qp22;
  }else if ((f == 10) && (m == 20)) {
    var f1 = qp23;
  }else if ((f == 11) && (m == 20)) {
    var f1 = qp24;
  }else if ((f == 12) && (m == 20)) {
    var f1 = qp25;
  }else if ((f == 13) && (m == 20)) {
    var f1 = qp26;
  }else if ((f == 14) && (m == 20)) {
    var f1 = qp27;
  }else if ((f == 15) && (m == 20)) {
    var f1 = qp28;
  }else if ((f >= 16) && (f <= 20) && (m == 20)) {
    var f1 = qp29;
  }else if ((f == 16) && (m == 40)) {
    var f1 = qp41;
  }else if ((f == 17) && (m == 40)) {
    var f1 = qp42;
  }else if ((f == 18) && (m == 40)) {
    var f1 = qp43;
  }else if ((f == 19) && (m == 40)) {
    var f1 = qp44;
  }else if ((f == 20) && (m == 40)) {
    var f1 = qp45;
  }else if ((f == 21) && (m == 40)) {
    var f1 = qp46;
  }else if ((f == 22) && (m == 40)) {
    var f1 = qp47;
  }else if ((f == 23) && (m == 40)) {
    var f1 = qp48;
  }else if ((f == 24) && (m == 40)) {
    var f1 = qp49;
  }else if ((f == 25) && (m == 40)) {
    var f1 = qp50;
  }else if ((f == 26) && (m == 40)) {
    var f1 = qp51;
  }else if ((f == 27) && (m == 40)) {
    var f1 = qp52;
  }else if ((f == 28) && (m == 40)) {
    var f1 = qp53;
  }else if ((f == 29) && (m == 40)) {
    var f1 = qp54;
  }else if ((f == 30) && (m == 40)) {
    var f1 = qp55;
  }else if ((f == 31) && (m == 40)) {
    var f1 = qp56;
  }else if ((f >= 32) && (f <= 40) && (m == 40)){
    var f1 = qp57;
  }else if ((f == 32) && (m == 80)) {
    var f1 = qp86;
  }else if ((f == 33) && (m == 80)) {
    var f1 = qp87;
  }else if ((f == 34) && (m == 80)) {
    var f1 = qp88;
  }else if ((f == 35) && (m == 80)) {
    var f1 = qp89;
  }else if ((f == 36) && (m == 80)) {
    var f1 = qp90;
  }else if ((f == 37) && (m == 80)) {
    var f1 = qp91;
  }else if ((f == 38) && (m == 80)) {
    var f1 = qp92;
  }else if ((f == 39) && (m == 80)) {
    var f1 = qp93;
  }else if ((f == 40) && (m == 80)) {
    var f1 = qp94;
  }else if ((f == 41) && (m == 80)) {
    var f1 = qp95;
  }else if ((f == 42) && (m == 80)) {
    var f1 = qp96;
  }else if ((f == 43) && (m == 80)) {
    var f1 = qp97;
  }else if ((f == 44) && (m == 80)) {
    var f1 = qp98;
  }else if ((f == 45) && (m == 80)) {
    var f1 = qp99;
  }else if ((f == 46) && (m == 80)) {
    var f1 = qp100;
  }else if ((f == 47) && (m == 80)) {
    var f1 = qp101;
  }else if ((f == 48) && (m == 80)) {
    var f1 = qp102;
  }else if ((f == 49) && (m == 80)) {
    var f1 = qp103;
  }else if ((f == 50) && (m == 80)) {
    var f1 = qp104;
  }else if ((f == 51) && (m == 80)) {
    var f1 = qp105;
  }else if ((f == 52) && (m == 80)) {
    var f1 = qp106;
  }else if ((f == 53) && (m == 80)) {
    var f1 = qp107;
  }else if ((f == 54) && (m == 80)) {
    var f1 = qp108;
  }else if ((f == 55) && (m == 80)) {
    var f1 = qp109;
  }else if ((f == 56) && (m == 80)) {
    var f1 = qp110;
  }else if ((f == 57) && (m == 80)) {
    var f1 = qp111;
  }else if ((f == 58) && (m == 80)) {
    var f1 = qp112;
  }else if ((f == 59) && (m == 80)) {
    var f1 = qp113;
  }else if ((f == 60) && (m == 80)) {
    var f1 = qp114;
  }else if ((f == 61) && (m == 80)) {
    var f1 = qp115;
  }else if ((f == 62) && (m == 80)) {
    var f1 = qp116;
  }else if ((f == 63) && (m == 80)) {
    var f1 = qp117;
  }else if ((f >= 64) && (f <= 80) && (m == 80)) {
    var f1 = qp118;
  }else {    
    var f1 = qp20;
  }


  var sum = parseFloat(a1) + parseFloat(b1) + parseFloat(c1) + parseFloat(d1) + parseFloat(e1) + parseFloat(f1);
  var raw = (sum/g);
  var result = raw.toFixed(2) //reduce resultant number upto 2 decimal points.
  document.getElementById("r").textContent = "Your GPA is:  "+ result;
  return false;
}

console.log("All Good");
