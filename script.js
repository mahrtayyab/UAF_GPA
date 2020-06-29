var details

function GPA60(){
  //variables for courses having 20 marks
  qp21 = 1
  var qp22 = 1.5
  var qp23 = 2
  var qp24 = 2.33
  var qp25 = 2.67
  var qp26 = 3
  var qp27 = 3.33
  var qp28 = 3.67
  var qp29 = 4
  var qp20 = 0
  //
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
  //
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
   //variable for courses having 80 marks
  var qp86 = 4
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
  //variables for courses with 100 marks
  var qp120 = 5
  var qp121 = 5.5
  var qp122 = 6
  var qp123 = 6.5
  var qp124 = 7
  var qp125 = 7.5
  var qp126 = 8
  var qp127 = 8.5
  var qp128 = 9
  var qp129 = 9.5
  var qp130 = 10
  var qp131 = 10.33
  var qp132 = 10.67
  var qp133 = 11
  var qp134 = 11.33
  var qp135 = 11.67
  var qp136 = 12
  var qp137 = 12.33
  var qp138 = 12.67
  var qp139 = 13
  var qp140 = 13.33
  var qp141 = 13.67
  var qp142 = 14
  var qp143 = 14.33
  var qp144 = 14.67
  var qp145 = 15
  var qp146 = 15.33
  var qp147 = 15.67
  var qp148 = 16
  var qp149 = 16.33
  var qp150 = 16.67
  var qp151 = 17
  var qp152 = 17.33
  var qp153 = 17.67
  var qp154 = 18
  var qp155 = 18.33
  var qp156 = 18.67
  var qp157 = 19
  var qp158 = 19.33
  var qp159 = 19.67
  var qp160 = 20

  //variabls for quality points ended



//grabbing the values entered by the user
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
  //grabbing the table 
  var cell1gr = document.getElementById("gr1");
  var cell1quapo = document.getElementById("quapo1");
  var cell1OM = document.getElementById("OM1");
  var cell1pr = document.getElementById("pr1");
  var cell2gr = document.getElementById("gr2");
  var cell2quapo = document.getElementById("quapo2");
  var cell2OM = document.getElementById("OM2");
  var cell2pr = document.getElementById("pr2");
  var cell3gr = document.getElementById("gr3");
  var cell3quapo = document.getElementById("quapo3");
  var cell3OM = document.getElementById("OM3");
  var cell3pr = document.getElementById("pr3");
  var cell4gr = document.getElementById("gr4");
  var cell4quapo = document.getElementById("quapo4");
  var cell4OM = document.getElementById("OM4");
  var cell4pr = document.getElementById("pr4");
  var cell5gr = document.getElementById("gr5");
  var cell5quapo = document.getElementById("quapo5");
  var cell5OM = document.getElementById("OM5");
  var cell5pr = document.getElementById("pr5");
  var cell6gr = document.getElementById("gr6");
  var cell6quapo = document.getElementById("quapo6");
  var cell6OM = document.getElementById("OM6");
  var cell6pr = document.getElementById("pr6");
  var celltquapo = document.getElementById("quapot");
  var celltOM = document.getElementById("OMt");
  var celltpr = document.getElementById("pr");
  
  //actual alog for calculation

  if ((a == 24) && (h == 60)) {
      var a1 = qp61;
      var grade1 = "D";
  }else if ((a == 25) && (h == 60)) {
    var a1 = qp62;
    var grade1 = "D";
  }else if ((a == 26) && (h == 60)) {
    var a1 = qp63;
    var grade1 = "D";
  }else if ((a == 27) && (h == 60)) {
    var a1 = qp64;
    var grade1 = "D";
  }else if ((a == 28) && (h == 60)) {
    var a1 = qp65;
    var grade1 = "D";
  }else if ((a == 29) && (h == 60)) {
    var a1 = qp66;
    var grade1 = "D";
  }else if ((a == 30) && (h == 60)) {
    var a1 = qp67;
    var grade1 = "C";
  }else if ((a == 31) && (h == 60)) {
    var a1 = qp68;
    var grade1 = "C";
  }else if ((a == 32) && (h == 60)) {
    var a1 = qp69;
    var grade1 = "C";
  }else if ((a == 33) && (h == 60)) {
    var a1 = qp70;
    var grade1 = "C";
  }else if ((a == 34) && (h == 60)) {
    var a1 = qp71;
    var grade1 = "C";
  }else if ((a == 35) && (h == 60)) {
    var a1 = qp72;
    var grade1 = "C";
  }else if ((a == 36) && (h == 60)) {
    var a1 = qp73;
    var grade1 = "C";
  }else if ((a == 37) && (h == 60)) {
    var a1 = qp74;
    var grade1 = "C";
  }else if ((a == 38) && (h == 60)) {
    var a1 = qp75;
    var grade1 = "C";
  }else if ((a == 39) && (h == 60)) {
    var a1 = qp76;
    var grade1 = "B";
  }else if ((a == 40) && (h == 60)) {
    var a1 = qp77;
    var grade1 = "B";
  }else if ((a == 41) && (h == 60)) {
    var a1 = qp78;
    var grade1 = "B";
  }else if ((a == 42) && (h == 60)) {
    var a1 = qp79;
    var grade1 = "B";
  }else if ((a == 43) && (h == 60)) {
    var a1 = qp80;
    var grade1 = "B";
  }else if ((a == 44) && (h == 60)) {
    var a1 = qp81;
    var grade1 = "B";
  }else if ((a == 45) && (h == 60)) {
    var a1 = qp82;
    var grade1 = "B";
  }else if ((a == 46) && (h == 60)) {
    var a1 = qp83;
    var grade1 = "B";
  }else if ((a == 47) && (h == 60)) {
    var a1 = qp84;
    var grade1 = "B";
  }else if ((a >= 48) && (a <= 60) && (h == 60)) {
    var a1 = qp85;
    var grade1 = "A";
  }else if ((a == 8) && (h == 20)) {
    var a1 = qp21;
    var grade1 = "D";
  }else if ((a == 9) && (h == 20)) {
    var a1 = qp22;
    var grade1 = "D";
  }else if ((a == 10) && (h == 20)) {
    var a1 = qp23;
    var grade1 = "C";
  }else if ((a == 11) && (h == 20)) {
    var a1 = qp24;
    var grade1 = "C";
  }else if ((a == 12) && (h == 20)) {
    var a1 = qp25;
    var grade1 = "C";
  }else if ((a == 13) && (h == 20)) {
    var a1 = qp26;
    var grade1 = "B";
  }else if ((a == 14) && (h == 20)) {
    var a1 = qp27;
    var grade1 = "B";
  }else if ((a == 15) && (h == 20)) {
    var a1 = qp28;
    var grade1 = "B";
  }else if ((a >= 16) && (a <= 20) && (h == 20)) {
    var a1 = qp29;
    var grade1 = "A";
  }else if ((a == 16) && (h == 40)) {
    var a1 = qp41;
    var grade1 = "D";
  }else if ((a == 17) && (h == 40)) {
    var a1 = qp42;
    var grade1 = "D";
  }else if ((a == 18) && (h == 40)) {
    var a1 = qp43;
    var grade1 = "D";
  }else if ((a == 19) && (h == 40)) {
    var a1 = qp44;
    var grade1 = "D";
  }else if ((a == 20) && (h == 40)) {
    var a1 = qp45;
    var grade1 = "C";
  }else if ((a == 21) && (h == 40)) {
    var a1 = qp46;
    var grade1 = "C";
  }else if ((a == 22) && (h == 40)) {
    var a1 = qp47;
    var grade1 = "C";
  }else if ((a == 23) && (h == 40)) {
    var a1 = qp48;
    var grade1 = "C";
  }else if ((a == 24) && (h == 40)) {
    var a1 = qp49;
    var grade1 = "C";
  }else if ((a == 25) && (h == 40)) {
    var a1 = qp50;
    var grade1 = "C";
  }else if ((a == 26) && (h == 40)) {
    var a1 = qp51;
    var grade1 = "B";
  }else if ((a == 27) && (h == 40)) {
    var a1 = qp52;
    var grade1 = "B";
  }else if ((a == 28) && (h == 40)) {
    var a1 = qp53;
    var grade1 = "B";
  }else if ((a == 29) && (h == 40)) {
    var a1 = qp54;
    var grade1 = "B";
  }else if ((a == 30) && (h == 40)) {
    var a1 = qp55;
    var grade1 = "B";
  }else if ((a == 31) && (h == 40)) {
    var a1 = qp56;
    var grade1 = "B";
  }else if ((a >= 32) && (a <= 40) && (h == 40)){
    var a1 = qp57;
    var grade1 = "A";
  }else if ((a == 32) && (h == 80)) {
    var a1 = qp86;
    var grade1 = "D";
  }else if ((a == 33) && (h == 80)) {
    var a1 = qp87;
    var grade1 = "D";
  }else if ((a == 34) && (h == 80)) {
    var a1 = qp88;
    var grade1 = "D";
  }else if ((a == 35) && (h == 80)) {
    var a1 = qp89;
    var grade1 = "D";
  }else if ((a == 36) && (h == 80)) {
    var a1 = qp90;
    var grade1 = "D";
  }else if ((a == 37) && (h == 80)) {
    var a1 = qp91;
    var grade1 = "D";
  }else if ((a == 38) && (h == 80)) {
    var a1 = qp92;
    var grade1 = "D";
  }else if ((a == 39) && (h == 80)) {
    var a1 = qp93;
    var grade1 = "D";
  }else if ((a == 40) && (h == 80)) {
    var a1 = qp94;
    var grade1 = "C";
  }else if ((a == 41) && (h == 80)) {
    var a1 = qp95;
    var grade1 = "C";
  }else if ((a == 42) && (h == 80)) {
    var a1 = qp96;
    var grade1 = "C";
  }else if ((a == 43) && (h == 80)) {
    var a1 = qp97;
    var grade1 = "C";
  }else if ((a == 44) && (h == 80)) {
    var a1 = qp98;
    var grade1 = "C";
  }else if ((a == 45) && (h == 80)) {
    var a1 = qp99;
    var grade1 = "C";
  }else if ((a == 46) && (h == 80)) {
    var a1 = qp100;
    var grade1 = "C";
  }else if ((a == 47) && (h == 80)) {
    var a1 = qp101;
    var grade1 = "C";
  }else if ((a == 48) && (h == 80)) {
    var a1 = qp102;
    var grade1 = "C";
  }else if ((a == 49) && (h == 80)) {
    var a1 = qp103;
    var grade1 = "C";
  }else if ((a == 50) && (h == 80)) {
    var a1 = qp104;
    var grade1 = "C";
  }else if ((a == 51) && (h == 80)) {
    var a1 = qp105;
    var grade1 = "C";
  }else if ((a == 52) && (h == 80)) {
    var a1 = qp106;
    var grade1 = "B";
  }else if ((a == 53) && (h == 80)) {
    var a1 = qp107;
    var grade1 = "B";
  }else if ((a == 54) && (h == 80)) {
    var a1 = qp108;
    var grade1 = "B";
  }else if ((a == 55) && (h == 80)) {
    var a1 = qp109;
    var grade1 = "B";
  }else if ((a == 56) && (h == 80)) {
    var a1 = qp110;
    var grade1 = "B";
  }else if ((a == 57) && (h == 80)) {
    var a1 = qp111;
    var grade1 = "B";
  }else if ((a == 58) && (h == 80)) {
    var a1 = qp112;
    var grade1 = "B";
  }else if ((a == 59) && (h == 80)) {
    var a1 = qp113;
    var grade1 = "B";
  }else if ((a == 60) && (h == 80)) {
    var a1 = qp114;
    var grade1 = "B";
  }else if ((a == 61) && (h == 80)) {
    var a1 = qp115;
    var grade1 = "B";
  }else if ((a == 62) && (h == 80)) {
    var a1 = qp116;
    var grade1 = "B";
  }else if ((a == 63) && (h == 80)) {
    var a1 = qp117;
    var grade1 = "B";
  }else if ((a >= 64) && (a <= 80) && (h == 80)) {
    var a1 = qp118;
    var grade1 = "A";
  }else if ((a == 40) && (h == 100)){
    var a1 = qp120;
    var grade1 = "D";
  }else if ((a == 41) && (h == 100)){
    var a1 = qp121;
    var grade1 = "D";
  }else if ((a == 42) && (h == 100)){
    var a1 = qp122;
    var grade1 = "D";
  }else if ((a == 43) && (h == 100)){
    var a1 = qp123;
    var grade1 = "D";
  }else if ((a == 44) && (h == 100)){
    var a1 = qp124;
    var grade1 = "D";
  }else if ((a == 45) && (h == 100)){
    var a1 = qp125;
    var grade1 = "D";
  }else if ((a == 46) && (h == 100)){
    var a1 = qp126;
    var grade1 = "D";
  }else if ((a == 47) && (h == 100)){
    var a1 = qp127;
    var grade1 = "D";
  }else if ((a == 48) && (h == 100)){
    var a1 = qp128;
    var grade1 = "D";
  }else if ((a == 49) && (h == 100)){
    var a1 = qp129;
    var grade1 = "D";
  }else if ((a == 50) && (h == 100)){
    var a1 = qp130;
    var grade1 = "C";
  }else if ((a == 51) && (h == 100)){
    var a1 = qp131;
    var grade1 = "C";
  }else if ((a == 52) && (h == 100)){
    var a1 = qp132;
    var grade1 = "C";
  }else if ((a == 53) && (h == 100)){
    var a1 = qp133;
    var grade1 = "C";
  }else if ((a == 54) && (h == 100)){
    var a1 = qp134;
    var grade1 = "C";
  }else if ((a == 55) && (h == 100)){
    var a1 = qp135;
    var grade1 = "C";
  }else if ((a == 56) && (h == 100)){
    var a1 = qp136;
    var grade1 = "C";
  }else if ((a == 57) && (h == 100)){
    var a1 = qp137;
    var grade1 = "C";
  }else if ((a == 58) && (h == 100)){
    var a1 = qp138;
    var grade1 = "C";
  }else if ((a == 59) && (h == 100)){
    var a1 = qp139;
    var grade1 = "C";
  }else if ((a == 60) && (h == 100)){
    var a1 = qp140;
    var grade1 = "C";
  }else if ((a == 61) && (h == 100)){
    var a1 = qp141;
    var grade1 = "C";
  }else if ((a == 62) && (h == 100)){
    var a1 = qp142;
    var grade1 = "C";
  }else if ((a == 63) && (h == 100)){
    var a1 = qp143;
    var grade1 = "C";
  }else if ((a == 64) && (h == 100)){
    var a1 = qp144;
    var grade1 = "C";
  }else if ((a == 65) && (h == 100)){
    var a1 = qp145;
    var grade1 = "B";
  }else if ((a == 66) && (h == 100)){
    var a1 = qp146;
    var grade1 = "B";
  }else if ((a == 67) && (h == 100)){
    var a1 = qp147;
    var grade1 = "B";
  }else if ((a == 68) && (h == 100)){
    var a1 = qp148;
    var grade1 = "B";
  }else if ((a == 69) && (h == 100)){
    var a1 = qp149;
    var grade1 = "B";
  }else if ((a == 70) && (h == 100)){
    var a1 = qp150;
    var grade1 = "B";
  }else if ((a == 71) && (h == 100)){
    var a1 = qp151;
    var grade1 = "B";
  }else if ((a == 72) && (h == 100)){
    var a1 = qp152;
    var grade1 = "B";
  }else if ((a == 73) && (h == 100)){
    var a1 = qp153;
    var grade1 = "B";
  }else if ((a == 74) && (h == 100)){
    var a1 = qp154;
    var grade1 = "B";
  }else if ((a == 75) && (h == 100)){
    var a1 = qp155;
    var grade1 = "B";
  }else if ((a == 76) && (h == 100)){
    var a1 = qp156;
    var grade1 = "B";
  }else if ((a == 77) && (h == 100)){
    var a1 = qp157;
    var grade1 = "B";
  }else if ((a == 78) && (h == 100)){
    var a1 = qp158;
    var grade1 = "B";
  }else if ((a == 79) && (h == 100)){
    var a1 = qp159;
    var grade1 = "B";
  }else if ((a >= 80) && (a <= 100) && (h == 100)){
    var a1 = qp160;
    var grade1 = "A";
  }else {
    var a1 = qp20;
    var grade1 = "NaN";
  }


  if ((b == 24) && (i == 60))  {
      var b1 = qp61; 
      var grade2 = "D";
  }else if ((b == 25) && (i == 60)) {
    var b1 = qp62;
    var grade2 = "D";
  }else if ((b == 26) && (i == 60)) {
    var b1 = qp63;
    var grade2 = "D";
  }else if ((b == 27) && (i == 60)) {
    var b1 = qp64;
    var grade2 = "D";
  }else if ((b == 28) && (i == 60)) {
    var b1 = qp65;
    var grade2 = "D";
  }else if ((b == 29) && (i == 60)) {
    var b1 = qp66;
    var grade2 = "D";
  }else if ((b == 30) && (i == 60)) {
    var b1 = qp67;
    var grade2 = "C";
  }else if ((b == 31) && (i == 60)) {
    var b1 = qp68;
    var grade2 = "C";
  }else if ((b == 32) && (i == 60)) {
    var b1 = qp69;
    var grade2 = "C";
  }else if ((b == 33) && (i == 60)) {
    var b1 = qp70;
    var grade2 = "C";
  }else if ((b == 34) && (i == 60)) {
    var b1 = qp71;
    var grade2 = "C";
  }else if ((b == 35) && (i == 60)) {
    var b1 = qp72;
    var grade2 = "C";
  }else if ((b == 36) && (i == 60)) {
    var b1 = qp73;
    var grade2 = "C";
  }else if ((b == 37) && (i == 60)) {
    var b1 = qp74;
    var grade2 = "C";
  }else if ((b == 38) && (i == 60)) {
    var b1 = qp75;
    var grade2 = "C";
  }else if ((b == 39) && (i == 60)) {
    var b1 = qp76;
    var grade2 = "B";
  }else if ((b == 40) && (i == 60)) {
    var b1 = qp77;
    var grade2 = "B";
  }else if ((b == 41) && (i == 60)) {
    var b1 = qp78;
    var grade2 = "B";
  }else if ((b == 42) && (i == 60)) {
    var b1 = qp79;
    var grade2 = "B";
  }else if ((b == 43) && (i == 60)) {
    var b1 = qp80;
    var grade2 = "B";
  }else if ((b == 44) && (i == 60)) {
    var b1 = qp81;
    var grade2 = "B";
  }else if ((b == 45) && (i == 60)) {
    var b1 = qp82;
    var grade2 = "B";
  }else if ((b == 46) && (i == 60)) {
    var b1 = qp83;
    var grade2 = "B";
  }else if ((b == 47) && (i == 60)) {
    var b1 = qp84;
    var grade2 = "B";
  }else if ((b >= 48) && (b <= 60) && (i == 60)) {
    var b1 = qp85;
    var grade2 = "A";
  }else if ((b == 8) && (i == 20)) {
    var b1 = qp21;
    var grade2 = "D";
  }else if ((b == 9) && (i == 20)) {
    var b1 = qp22;
    var grade2 = "D";
  }else if ((b == 10) && (i == 20)) {
    var b1 = qp23;
    var grade2 = "C";
  }else if ((b == 11) && (i == 20)) {
    var b1 = qp24;
    var grade2 = "C";
  }else if ((b == 12) && (i == 20)) {
    var b1 = qp25;
    var grade2 = "C";
  }else if ((b == 13) && (i == 20)) {
    var b1 = qp26;
    var grade2 = "B";
  }else if ((b == 14) && (i == 20)) {
    var b1 = qp27;
    var grade2 = "B";
  }else if ((b == 15) && (i == 20)) {
    var b1 = qp28;
    var grade2 = "B";
  }else if ((b >= 16) && (b <= 20) && (i == 20)) {
    var b1 = qp29;
    var grade2 = "A";
  }else if ((b == 16) && (i == 40)) {
    var b1 = qp41;
    var grade2 = "D";
  }else if ((b == 17) && (i == 40)) {
    var b1 = qp42;
    var grade2 = "D";
  }else if ((b == 18) && (i == 40)) {
    var b1 = qp43;
    var grade2 = "D";
  }else if ((b == 19) && (i == 40)) {
    var b1 = qp44;
    var grade2 = "D";
  }else if ((b == 20) && (i == 40)) {
    var b1 = qp45;
    var grade2 = "C";
  }else if ((b == 21) && (i == 40)) {
    var b1 = qp46;
    var grade2 = "C";
  }else if ((b == 22) && (i == 40)) {
    var b1 = qp47;
    var grade2 = "C";
  }else if ((b == 23) && (i == 40)) {
    var b1 = qp48;
    var grade2 = "C";
  }else if ((b == 24) && (i == 40)) {
    var b1 = qp49;
    var grade2 = "C";
  }else if ((b == 25) && (i == 40)) {
    var b1 = qp50;
    var grade2 = "C";
  }else if ((b == 26) && (i == 40)) {
    var b1 = qp51;
    var grade2 = "B";
  }else if ((b == 27) && (i == 40)) {
    var b1 = qp52;
    var grade2 = "B";
  }else if ((b == 28) && (i == 40)) {
    var b1 = qp53;
    var grade2 = "B";
  }else if ((b == 29) && (i == 40)) {
    var b1 = qp54;
    var grade2 = "B";
  }else if ((b == 30) && (i == 40)) {
    var b1 = qp55;
    var grade2 = "B";
  }else if ((b == 31) && (i == 40)) {
    var b1 = qp56;
    var grade2 = "B";
  }else if ((b >= 32) && (b <= 40) && (i == 40)){
    var b1 = qp57;
    var grade2 = "A";
  }else if ((b == 32) && (i == 80)) {
    var b1 = qp86;
    var grade2 = "D";
  }else if ((b == 33) && (i == 80)) {
    var b1 = qp87;
    var grade2 = "D";
  }else if ((b == 34) && (i == 80)) {
    var b1 = qp88;
    var grade2 = "D";
  }else if ((b == 35) && (i == 80)) {
    var b1 = qp89;
    var grade2 = "D";
  }else if ((b == 36) && (i == 80)) {
    var b1 = qp90;
    var grade2 = "D";
  }else if ((b == 37) && (i == 80)) {
    var b1 = qp91;
    var grade2 = "D";
  }else if ((b == 38) && (i == 80)) {
    var b1 = qp92;
    var grade2 = "D";
  }else if ((b == 39) && (i == 80)) {
    var b1 = qp93;
    var grade2 = "D";
  }else if ((b == 40) && (i == 80)) {
    var b1 = qp94;
    var grade2 = "C";
  }else if ((b == 41) && (i == 80)) {
    var b1 = qp95;
    var grade2 = "C";
  }else if ((b == 42) && (i == 80)) {
    var b1 = qp96;
    var grade2 = "C";
  }else if ((b == 43) && (i == 80)) {
    var b1 = qp97;
    var grade2 = "C";
  }else if ((b == 44) && (i == 80)) {
    var b1 = qp98;
    var grade2 = "C";
  }else if ((b == 45) && (i == 80)) {
    var b1 = qp99;
    var grade2 = "C";
  }else if ((b == 46) && (i == 80)) {
    var b1 = qp100;
    var grade2 = "C";
  }else if ((b == 47) && (i == 80)) {
    var b1 = qp101;
    var grade2 = "C";
  }else if ((b == 48) && (i == 80)) {
    var b1 = qp102;
    var grade2 = "C";
  }else if ((b == 49) && (i == 80)) {
    var b1 = qp103;
    var grade2 = "C";
  }else if ((b == 50) && (i == 80)) {
    var b1 = qp104;
    var grade2 = "C";
  }else if ((b == 51) && (i == 80)) {
    var b1 = qp105;
    var grade2 = "C";
  }else if ((b == 52) && (i == 80)) {
    var b1 = qp106;
    var grade2 = "B";
  }else if ((b == 53) && (i == 80)) {
    var b1 = qp107;
    var grade2 = "B";
  }else if ((b == 54) && (i == 80)) {
    var b1 = qp108;
    var grade2 = "B";
  }else if ((b == 55) && (i == 80)) {
    var b1 = qp109;
    var grade2 = "B";
  }else if ((b == 56) && (i == 80)) {
    var b1 = qp110;
    var grade2 = "B";
  }else if ((b == 57) && (i == 80)) {
    var b1 = qp111;
    var grade2 = "B";
  }else if ((b == 58) && (i == 80)) {
    var b1 = qp112;
    var grade2 = "B";
  }else if ((b == 59) && (i == 80)) {
    var b1 = qp113;
    var grade2 = "B";
  }else if ((b == 60) && (i == 80)) {
    var b1 = qp114;
    var grade2 = "B";
  }else if ((b == 61) && (i == 80)) {
    var b1 = qp115;
    var grade2 = "B";
  }else if ((b == 62) && (i == 80)) {
    var b1 = qp116;
    var grade2 = "B";
  }else if ((b == 63) && (i == 80)) {
    var b1 = qp117;
    var grade2 = "B";
  }else if ((b >= 64) && (b <= 80) && (i == 80)) {
    var b1 = qp118;
    var grade2 = "A";
  }else if ((b == 40) && (i == 100)){
    var b1 = qp120;
    var grade2 = "D";
  }else if ((b == 41) && (i == 100)){
    var b1 = qp121;
    var grade2 = "D";
  }else if ((b == 42) && (i == 100)){
    var b1 = qp122;
    var grade2 = "D";
  }else if ((b == 43) && (i == 100)){
    var b1 = qp123;
    var grade2 = "D";
  }else if ((b == 44) && (i == 100)){
    var b1 = qp124;
    var grade2 = "D";
  }else if ((b == 45) && (i == 100)){
    var b1 = qp125;
    var grade2 = "D";
  }else if ((b == 46) && (i == 100)){
    var b1 = qp126;
    var grade2 = "D";
  }else if ((b == 47) && (i == 100)){
    var b1 = qp127;
    var grade2 = "D";
  }else if ((b == 48) && (i == 100)){
    var b1 = qp128;
    var grade2 = "D";
  }else if ((b == 49) && (i == 100)){
    var b1 = qp129;
    var grade2 = "D";
  }else if ((b == 50) && (i == 100)){
    var b1 = qp130;
    var grade2 = "C";
  }else if ((b == 51) && (i == 100)){
    var b1 = qp131;
    var grade2 = "C";
  }else if ((b == 52) && (i == 100)){
    var b1 = qp132;
    var grade2 = "C";
  }else if ((b == 53) && (i == 100)){
    var b1 = qp133;
    var grade2 = "C";
  }else if ((b == 54) && (i == 100)){
    var b1 = qp134;
    var grade2 = "C";
  }else if ((b == 55) && (i == 100)){
    var b1 = qp135;
    var grade2 = "C";
  }else if ((b == 56) && (i == 100)){
    var b1 = qp136;
    var grade2 = "C";
  }else if ((b == 57) && (i == 100)){
    var b1 = qp137;
    var grade2 = "C";
  }else if ((b == 58) && (i == 100)){
    var b1 = qp138;
    var grade2 = "C";
  }else if ((b == 59) && (i == 100)){
    var b1 = qp139;
    var grade2 = "C";
  }else if ((b == 60) && (i == 100)){
    var b1 = qp140;
    var grade2 = "C";
  }else if ((b == 61) && (i == 100)){
    var b1 = qp141;
    var grade2 = "C";
  }else if ((b == 62) && (i == 100)){
    var b1 = qp142;
    var grade2 = "C";
  }else if ((b == 63) && (i == 100)){
    var b1 = qp143;
    var grade2 = "C";
  }else if ((b == 64) && (i == 100)){
    var b1 = qp144;
    var grade2 = "C";
  }else if ((b == 65) && (i == 100)){
    var b1 = qp145;
    var grade2 = "B";
  }else if ((b == 66) && (i == 100)){
    var b1 = qp146;
    var grade2 = "B";
  }else if ((b == 67) && (i == 100)){
    var b1 = qp147;
    var grade2 = "B";
  }else if ((b == 68) && (i == 100)){
    var b1 = qp148;
    var grade2 = "B";
  }else if ((b == 69) && (i == 100)){
    var b1 = qp149;
    var grade2 = "B";
  }else if ((b == 70) && (i == 100)){
    var b1 = qp150;
    var grade2 = "B";
  }else if ((b == 71) && (i == 100)){
    var b1 = qp151;
    var grade2 = "B";
  }else if ((b == 72) && (i == 100)){
    var b1 = qp152;
    var grade2 = "B";
  }else if ((b == 73) && (i == 100)){
    var b1 = qp153;
    var grade2 = "B";
  }else if ((b == 74) && (i == 100)){
    var b1 = qp154;
    var grade2 = "B";
  }else if ((b == 75) && (i == 100)){
    var b1 = qp155;
    var grade2 = "B";
  }else if ((b == 76) && (i == 100)){
    var b1 = qp156;
    var grade2 = "B";
  }else if ((b == 77) && (i == 100)){
    var b1 = qp157;
    var grade2 = "B";
  }else if ((b == 78) && (i == 100)){
    var b1 = qp158;
    var grade2 = "B";
  }else if ((b == 79) && (i == 100)){
    var b1 = qp159;
    var grade2 = "B";
  }else if ((b >= 80) && (b <= 100) && (i == 100)){
    var b1 = qp160;
    var grade2 = "A";
  }else{
    var b1 = qp20;
    var grade2 = "NaN";
  }



  if ((c == 24) && (j == 60)) {
      var c1 = qp61;
      var grade3 = "D";
  }else if ((c == 25) && (j == 60)) {
    var c1 = qp62;
    var grade3 = "D";
  }else if ((c == 26) && (j == 60)) {
    var c1 = qp63;
    var grade3 = "D";
  }else if ((c == 27) && (j == 60)) {
    var c1 = qp64;
    var grade3 = "D";
  }else if ((c == 28) && (j == 60)) {
    var c1 = qp65;
    var grade3 = "D";
  }else if ((c == 29) && (j == 60)) {
    var c1 = qp66;
    var grade3 = "D";
  }else if ((c == 30) && (j == 60)) {
    var c1 = qp67;
    var grade3 = "C";
  }else if ((c == 31) && (j == 60)) {
    var c1 = qp68;
    var grade3 = "C";
  }else if ((c == 32) && (j == 60)) {
    var c1 = qp69;
    var grade3 = "C";
  }else if ((c == 33) && (j == 60)) {
    var c1 = qp70;
    var grade3 = "C";
  }else if ((c == 34) && (j == 60)) {
    var c1 = qp71;
    var grade3 = "C";
  }else if ((c == 35) && (j == 60)) {
    var c1 = qp72;
    var grade3 = "C";
  }else if ((c == 36) && (j == 60)) {
    var c1 = qp73;
    var grade3 = "C";
  }else if ((c == 37) && (j == 60)) {
    var c1 = qp74;
    var grade3 = "C";
  }else if ((c == 38) && (j == 60)) {
    var c1 = qp75;
    var grade3 = "C";
  }else if ((c == 39) && (j == 60)) {
    var c1 = qp76;
    var grade3 = "B";
  }else if ((c == 40) && (j == 60)) {
    var c1 = qp77;
    var grade3 = "B";
  }else if ((c == 41) && (j == 60)) {
    var c1 = qp78;
    var grade3 = "B";
  }else if ((c == 42) && (j == 60)) {
    var c1 = qp79;
    var grade3 = "B";
  }else if ((c == 43) && (j == 60)) {
    var c1 = qp80;
    var grade3 = "B";
  }else if ((c == 44) && (j == 60)) {
    var c1 = qp81;
    var grade3 = "B";
  }else if ((c == 45) && (j == 60)) {
    var c1 = qp82;
    var grade3 = "B";
  }else if ((c == 46) && (j == 60)) {
    var c1 = qp83;
    var grade3 = "B";
  }else if ((c == 47) && (j == 60)) {
    var c1 = qp84;
    var grade3 = "B";
  }else if ((c >= 48) && (c <= 60) && (j == 60)) {
    var c1 = qp85;
    var grade3 = "A";
  }else if ((c == 8) && (j == 20)) {
    var c1 = qp21;
    var grade3 = "D";
  }else if ((c == 9) && (j == 20)) {
    var c1 = qp22;
    var grade3 = "D";
  }else if ((c == 10) && (j == 20)) {
    var c1 = qp23;
    var grade3 = "C";
  }else if ((c == 11) && (j == 20)) {
    var c1 = qp24;
    var grade3 = "C";
  }else if ((c == 12) && (j == 20)) {
    var c1 = qp25;
    var grade3 = "C";
  }else if ((c == 13) && (j == 20)) {
    var c1 = qp26;
    var grade3 = "B";
  }else if ((c == 14) && (j == 20)) {
    var c1 = qp27;
    var grade3 = "B";
  }else if ((c == 15) && (j == 20)) {
    var c1 = qp28;
    var grade3 = "B";
  }else if ((c >= 16) && (c <= 20) && (j == 20)) {
    var c1 = qp29;
    var grade3 = "A";
  }else if ((c == 16) && (j == 40)) {
    var c1 = qp41;
    var grade3 = "D";
  }else if ((c == 17) && (j == 40)) {
    var c1 = qp42;
    var grade3 = "D";
  }else if ((c == 18) && (j == 40)) {
    var c1 = qp43;
    var grade3 = "D";
  }else if ((c == 19) && (j == 40)) {
    var c1 = qp44;
    var grade3 = "D";
  }else if ((c == 20) && (j == 40)) {
    var c1 = qp45;
    var grade3 = "C";
  }else if ((c == 21) && (j == 40)) {
    var c1 = qp46;
    var grade3 = "C";
  }else if ((c == 22) && (j == 40)) {
    var c1 = qp47;
    var grade3 = "C";
  }else if ((c == 23) && (j == 40)) {
    var c1 = qp48;
    var grade3 = "C";
  }else if ((c == 24) && (j == 40)) {
    var c1 = qp49;
    var grade3 = "C";
  }else if ((c == 25) && (j == 40)) {
    var c1 = qp50;
    var grade3 = "C";
  }else if ((c == 26) && (j == 40)) {
    var c1 = qp51;
    var grade3 = "B";
  }else if ((c == 27) && (j == 40)) {
    var c1 = qp52;
    var grade3 = "B";
  }else if ((c == 28) && (j == 40)) {
    var c1 = qp53;
    var grade3 = "B";
  }else if ((c == 29) && (j == 40)) {
    var c1 = qp54;
    var grade3 = "B";
  }else if ((c == 30) && (j == 40)) {
    var c1 = qp55;
    var grade3 = "B";
  }else if ((c == 31) && (j == 40)) {
    var c1 = qp56;
    var grade3 = "B";
  }else if ((c >= 32) && (c <= 40) && (j == 40)){
    var c1 = qp57;
    var grade3 = "A";
  }else if ((c == 32) && (j == 80)) {
    var c1 = qp86;
    var grade3 = "D";
  }else if ((c == 33) && (j == 80)) {
    var c1 = qp87;
    var grade3 = "D";
  }else if ((c == 34) && (j == 80)) {
    var c1 = qp88;
    var grade3 = "D";
  }else if ((c == 35) && (j == 80)) {
    var c1 = qp89;
    var grade3 = "D";
  }else if ((c == 36) && (j == 80)) {
    var c1 = qp90;
    var grade3 = "D";
  }else if ((c == 37) && (j == 80)) {
    var c1 = qp91;
    var grade3 = "D";
  }else if ((c == 38) && (j == 80)) {
    var c1 = qp92;
    var grade3 = "D";
  }else if ((c == 39) && (j == 80)) {
    var c1 = qp93;
    var grade3 = "D";
  }else if ((c == 40) && (j == 80)) {
    var c1 = qp94;
    var grade3 = "C";
  }else if ((c == 41) && (j == 80)) {
    var c1 = qp95;
    var grade3 = "C";
  }else if ((c == 42) && (j == 80)) {
    var c1 = qp96;
    var grade3 = "C";
  }else if ((c == 43) && (j == 80)) {
    var c1 = qp97;
    var grade3 = "C";
  }else if ((c == 44) && (j == 80)) {
    var c1 = qp98;
    var grade3 = "C";
  }else if ((c == 45) && (j == 80)) {
    var c1 = qp99;
    var grade3 = "C";
  }else if ((c == 46) && (j == 80)) {
    var c1 = qp100;
    var grade3 = "C";
  }else if ((c == 47) && (j == 80)) {
    var c1 = qp101;
    var grade3 = "C";
  }else if ((c == 48) && (j == 80)) {
    var c1 = qp102;
    var grade3 = "C";
  }else if ((c == 49) && (j == 80)) {
    var c1 = qp103;
    var grade3 = "C";
  }else if ((c == 50) && (j == 80)) {
    var c1 = qp104;
    var grade3 = "C";
  }else if ((c == 51) && (j == 80)) {
    var c1 = qp105;
    var grade3 = "C";
  }else if ((c == 52) && (j == 80)) {
    var c1 = qp106;
    var grade3 = "B";
  }else if ((c == 53) && (j == 80)) {
    var c1 = qp107;
    var grade3 = "B";
  }else if ((c == 54) && (j == 80)) {
    var c1 = qp108;
    var grade3 = "B";
  }else if ((c == 55) && (j == 80)) {
    var c1 = qp109;
    var grade3 = "B";
  }else if ((c == 56) && (j == 80)) {
    var c1 = qp110;
    var grade3 = "B";
  }else if ((c == 57) && (j == 80)) {
    var c1 = qp111;
    var grade3 = "B";
  }else if ((c == 58) && (j == 80)) {
    var c1 = qp112;
    var grade3 = "B";
  }else if ((c == 59) && (j == 80)) {
    var c1 = qp113;
    var grade3 = "B";
  }else if ((c == 60) && (j == 80)) {
    var c1 = qp114;
    var grade3 = "B";
  }else if ((c == 61) && (j == 80)) {
    var c1 = qp115;
    var grade3 = "B";
  }else if ((c == 62) && (j == 80)) {
    var c1 = qp116;
    var grade3 = "B";
  }else if ((c == 63) && (j == 80)) {
    var c1 = qp117;
    var grade3 = "B";
  }else if ((c >= 64) && (c <= 80) && (j == 80)) {
    var c1 = qp118;
    var grade3 = "A";
  }else if ((c == 40) && (j == 100)){
    var c1 = qp120;
    var grade3 = "D";
  }else if ((c == 41) && (j == 100)){
    var c1 = qp121;
    var grade3 = "D";
  }else if ((c == 42) && (j == 100)){
    var c1 = qp122;
    var grade3 = "D";
  }else if ((c == 43) && (j == 100)){
    var c1 = qp123;
    var grade3 = "D";
  }else if ((c == 44) && (j == 100)){
    var c1 = qp124;
    var grade3 = "D";
  }else if ((c == 45) && (j == 100)){
    var c1 = qp125;
    var grade3 = "D";
  }else if ((c == 46) && (j == 100)){
    var c1 = qp126;
    var grade3 = "D";
  }else if ((c == 47) && (j == 100)){
    var c1 = qp127;
    var grade3 = "D";
  }else if ((c == 48) && (j == 100)){
    var c1 = qp128;
    var grade3 = "D";
  }else if ((c == 49) && (j == 100)){
    var c1 = qp129;
    var grade3 = "D";
  }else if ((c == 50) && (j == 100)){
    var c1 = qp130;
    var grade3 = "C";
  }else if ((c == 51) && (j == 100)){
    var c1 = qp131;
    var grade3 = "C";
  }else if ((c == 52) && (j == 100)){
    var c1 = qp132;
    var grade3 = "C";
  }else if ((c == 53) && (j == 100)){
    var c1 = qp133;
    var grade3 = "C";
  }else if ((c == 54) && (j == 100)){
    var c1 = qp134;
    var grade3 = "C";
  }else if ((c == 55) && (j == 100)){
    var c1 = qp135;
    var grade3 = "C";
  }else if ((c == 56) && (j == 100)){
    var c1 = qp136;
    var grade3 = "C";
  }else if ((c == 57) && (j == 100)){
    var c1 = qp137;
    var grade3 = "C";
  }else if ((c == 58) && (j == 100)){
    var c1 = qp138;
    var grade3 = "C";
  }else if ((c == 59) && (j == 100)){
    var c1 = qp139;
    var grade3 = "C";
  }else if ((c == 60) && (j == 100)){
    var c1 = qp140;
    var grade3 = "C";
  }else if ((c == 61) && (j == 100)){
    var c1 = qp141;
    var grade3 = "C";
  }else if ((c == 62) && (j == 100)){
    var c1 = qp142;
    var grade3 = "C";
  }else if ((c == 63) && (j == 100)){
    var c1 = qp143;
    var grade3 = "C";
  }else if ((c == 64) && (j == 100)){
    var c1 = qp144;
    var grade3 = "C";
  }else if ((c == 65) && (j == 100)){
    var c1 = qp145;
    var grade3 = "B";
  }else if ((c == 66) && (j == 100)){
    var c1 = qp146;
    var grade3 = "B";
  }else if ((c == 67) && (j == 100)){
    var c1 = qp147;
    var grade3 = "B";
  }else if ((c == 68) && (j == 100)){
    var c1 = qp148;
    var grade3 = "B";
  }else if ((c == 69) && (j == 100)){
    var c1 = qp149;
    var grade3 = "B";
  }else if ((c == 70) && (j == 100)){
    var c1 = qp150;
    var grade3 = "B";
  }else if ((c == 71) && (j == 100)){
    var c1 = qp151;
    var grade3 = "B";
  }else if ((c == 72) && (j == 100)){
    var c1 = qp152;
    var grade3 = "B";
  }else if ((c == 73) && (j == 100)){
    var c1 = qp153;
    var grade3 = "B";
  }else if ((c == 74) && (j == 100)){
    var c1 = qp154;
    var grade3 = "B";
  }else if ((c == 75) && (j == 100)){
    var c1 = qp155;
    var grade3 = "B";
  }else if ((c == 76) && (j == 100)){
    var c1 = qp156;
    var grade3 = "B";
  }else if ((c == 77) && (j == 100)){
    var c1 = qp157;
    var grade3 = "B";
  }else if ((c == 78) && (j == 100)){
    var c1 = qp158;
    var grade3 = "B";
  }else if ((c == 79) && (j == 100)){
    var c1 = qp159;
    var grade3 = "B";
  }else if ((c >= 80) && (c <= 100) && (j == 100)){
    var c1 = qp160;
    var grade3 = "A";
  }else {
    var c1 = qp20;
    var grade3 = "NaN";
  }


  if ((d == 24) && (k == 60)) {
      var d1 = qp61;
      var grade4 = "D";
  }else if ((d == 25) && (k == 60)) {
    var d1 = qp62;
    var grade4 = "D";
  }else if ((d == 26) && (k == 60)) {
    var d1 = qp63;
    var grade4 = "D";
  }else if ((d == 27) && (k == 60)) {
    var d1 = qp64;
    var grade4 = "D";
  }else if ((d == 28) && (k == 60)) {
    var d1 = qp65;
    var grade4 = "D";
  }else if ((d == 29) && (k == 60)) {
    var d1 = qp66;
    var grade4 = "D";
  }else if ((d == 30) && (k == 60)) {
    var d1 = qp67;
    var grade4 = "C";
  }else if ((d == 31) && (k == 60)) {
    var d1 = qp68;
    var grade4 = "C";
  }else if ((d == 32) && (k == 60)) {
    var d1 = qp69;
    var grade4 = "C";
  }else if ((d == 33) && (k == 60)) {
    var d1 = qp70;
    var grade4 = "C";
  }else if ((d == 34) && (k == 60)) {
    var d1 = qp71;
    var grade4 = "C";
  }else if ((d == 35) && (k == 60)) {
    var d1 = qp72;
    var grade4 = "C";
  }else if ((d == 36) && (k == 60)) {
    var d1 = qp73;
    var grade4 = "C";
  }else if ((d == 37) && (k == 60)) {
    var d1 = qp74;
    var grade4 = "C";
  }else if ((d == 38) && (k == 60)) {
    var d1 = qp75;
    var grade4 = "C";
  }else if ((d == 39) && (k == 60)) {
    var d1 = qp76;
    var grade4 = "B";
  }else if ((d == 40) && (k == 60)) {
    var d1 = qp77;
    var grade4 = "B";
  }else if ((d == 41) && (k == 60)) {
    var d1 = qp78;
    var grade4 = "B";
  }else if ((d == 42) && (k == 60)) {
    var d1 = qp79;
    var grade4 = "B";
  }else if ((d == 43) && (k == 60)) {
    var d1 = qp80;
    var grade4 = "B";
  }else if ((d == 44) && (k == 60)) {
    var d1 = qp81;
    var grade4 = "B";
  }else if ((d == 45) && (k == 60)) {
    var d1 = qp82;
    var grade4 = "B";
  }else if ((d == 46) && (k == 60)) {
    var d1 = qp83;
    var grade4 = "B";
  }else if ((d == 47) && (k == 60)) {
    var d1 = qp84;
    var grade4 = "B";
  }else if ((d >= 48) && (d <= 60) && (k == 60)) {
    var d1 = qp85;
    var grade4 = "A";
  }else if ((d == 8) && (k == 20)) {
    var d1 = qp21;
    var grade4 = "D";
  }else if ((d == 9) && (k == 20)) {
    var d1 = qp22;
    var grade4 = "D";
  }else if ((d == 10) && (k == 20)) {
    var d1 = qp23;
    var grade4 = "C";
  }else if ((d == 11) && (k == 20)) {
    var d1 = qp24;
    var grade4 = "C";
  }else if ((d == 12) && (k == 20)) {
    var d1 = qp25;
    var grade4 = "C";
  }else if ((d == 13) && (k == 20)) {
    var d1 = qp26;
    var grade4 = "B";
  }else if ((d == 14) && (k == 20)) {
    var d1 = qp27;
    var grade4 = "B";
  }else if ((d == 15) && (k == 20)) {
    var d1 = qp28;
    var grade4 = "B";
  }else if ((d >= 16) && (d <= 20) && (k == 20)) {
    var d1 = qp29;
    var grade4 = "A";
  }else if ((d == 16) && (k == 40)) {
    var d1 = qp41;
    var grade4 = "D";
  }else if ((d == 17) && (k == 40)) {
    var d1 = qp42;
    var grade4 = "D";
  }else if ((d == 18) && (k == 40)) {
    var d1 = qp43;
    var grade4 = "D";
  }else if ((d == 19) && (k == 40)) {
    var d1 = qp44;
    var grade4 = "D";
  }else if ((d == 20) && (k == 40)) {
    var d1 = qp45;
    var grade4 = "C";
  }else if ((d == 21) && (k == 40)) {
    var d1 = qp46;
    var grade4 = "C";
  }else if ((d == 22) && (k == 40)) {
    var d1 = qp47;
    var grade4 = "C";
  }else if ((d == 23) && (k == 40)) {
    var d1 = qp48;
    var grade4 = "C";
  }else if ((d == 24) && (k == 40)) {
    var d1 = qp49;
    var grade4 = "C";
  }else if ((d == 25) && (k == 40)) {
    var d1 = qp50;
    var grade4 = "C";
  }else if ((d == 26) && (k == 40)) {
    var d1 = qp51;
    var grade4 = "B";
  }else if ((d == 27) && (k == 40)) {
    var d1 = qp52;
    var grade4 = "B";
  }else if ((d == 28) && (k == 40)) {
    var d1 = qp53;
    var grade4 = "B";
  }else if ((d == 29) && (k == 40)) {
    var d1 = qp54;
    var grade4 = "B";
  }else if ((d == 30) && (k == 40)) {
    var d1 = qp55;
    var grade4 = "B";
  }else if ((d == 31) && (k == 40)) {
    var d1 = qp56;
    var grade4 = "B";
  }else if ((d >= 32) && (d <= 40) && (k == 40)){
    var d1 = qp57;
    var grade4 = "A";
  }else if ((d == 32) && (k == 80)) {
    var d1 = qp86;
    var grade4 = "D";
  }else if ((d == 33) && (k == 80)) {
    var d1 = qp87;
    var grade4 = "D";
  }else if ((d == 34) && (k == 80)) {
    var d1 = qp88;
    var grade4 = "D";
  }else if ((d == 35) && (k == 80)) {
    var d1 = qp89;
    var grade4 = "D";
  }else if ((d == 36) && (k == 80)) {
    var d1 = qp90;
    var grade4 = "D";
  }else if ((d == 37) && (k == 80)) {
    var d1 = qp91;
    var grade4 = "D";
  }else if ((d == 38) && (k == 80)) {
    var d1 = qp92;
    var grade4 = "D";
  }else if ((d == 39) && (k == 80)) {
    var d1 = qp93;
    var grade4 = "D";
  }else if ((d == 40) && (k == 80)) {
    var d1 = qp94;
    var grade4 = "C";
  }else if ((d == 41) && (k == 80)) {
    var d1 = qp95;
    var grade4 = "C";
  }else if ((d == 42) && (k == 80)) {
    var d1 = qp96;
    var grade4 = "C";
  }else if ((d == 43) && (k == 80)) {
    var d1 = qp97;
    var grade4 = "C";
  }else if ((d == 44) && (k == 80)) {
    var d1 = qp98;
    var grade4 = "C";
  }else if ((d == 45) && (k == 80)) {
    var d1 = qp99;
    var grade4 = "C";
  }else if ((d == 46) && (k == 80)) {
    var d1 = qp100;
    var grade4 = "C";
  }else if ((d == 47) && (k == 80)) {
    var d1 = qp101;
    var grade4 = "C";
  }else if ((d == 48) && (k == 80)) {
    var d1 = qp102;
    var grade4 = "C";
  }else if ((d == 49) && (k == 80)) {
    var d1 = qp103;
    var grade4 = "C";
  }else if ((d == 50) && (k == 80)) {
    var d1 = qp104;
    var grade4 = "C";
  }else if ((d == 51) && (k == 80)) {
    var d1 = qp105;
    var grade4 = "C";
  }else if ((d == 52) && (k == 80)) {
    var d1 = qp106;
    var grade4 = "B";
  }else if ((d == 53) && (k == 80)) {
    var d1 = qp107;
    var grade4 = "B";
  }else if ((d == 54) && (k == 80)) {
    var d1 = qp108;
    var grade4 = "B";
  }else if ((d == 55) && (k == 80)) {
    var d1 = qp109;
    var grade4 = "B";
  }else if ((d == 56) && (k == 80)) {
    var d1 = qp110;
    var grade4 = "B";
  }else if ((d == 57) && (k == 80)) {
    var d1 = qp111;
    var grade4 = "B";
  }else if ((d == 58) && (k == 80)) {
    var d1 = qp112;
    var grade4 = "B";
  }else if ((d == 59) && (k == 80)) {
    var d1 = qp113;
    var grade4 = "B";
  }else if ((d == 60) && (k == 80)) {
    var d1 = qp114;
    var grade4 = "B";
  }else if ((d == 61) && (k == 80)) {
    var d1 = qp115;
    var grade4 = "B";
  }else if ((d == 62) && (k == 80)) {
    var d1 = qp116;
    var grade4 = "B";
  }else if ((d == 63) && (k == 80)) {
    var d1 = qp117;
    var grade4 = "B";
  }else if ((d >= 64) && (d <= 80) && (k == 80)) {
    var d1 = qp118;
    var grade4 = "A";
  }else if ((d == 40) && (k == 100)){
    var d1 = qp120;
    var grade4 = "D";
  }else if ((d == 41) && (k == 100)){
    var d1 = qp121;
    var grade4 = "D";
  }else if ((d == 42) && (k == 100)){
    var d1 = qp122;
    var grade4 = "D";
  }else if ((d == 43) && (k == 100)){
    var d1 = qp123;
    var grade4 = "D";
  }else if ((d == 44) && (k == 100)){
    var d1 = qp124;
    var grade4 = "D";
  }else if ((d == 45) && (k == 100)){
    var d1 = qp125;
    var grade4 = "D";
  }else if ((d == 46) && (k == 100)){
    var d1 = qp126;
    var grade4 = "D";
  }else if ((d == 47) && (k == 100)){
    var d1 = qp127;
    var grade4 = "D";
  }else if ((d == 48) && (k == 100)){
    var d1 = qp128;
    var grade4 = "D";
  }else if ((d == 49) && (k == 100)){
    var d1 = qp129;
    var grade4 = "D";
  }else if ((d == 50) && (k == 100)){
    var d1 = qp130;
    var grade4 = "C";
  }else if ((d == 51) && (k == 100)){
    var d1 = qp131;
    var grade4 = "C";
  }else if ((d == 52) && (k == 100)){
    var d1 = qp132;
    var grade4 = "C";
  }else if ((d == 53) && (k == 100)){
    var d1 = qp133;
    var grade4 = "C";
  }else if ((d == 54) && (k == 100)){
    var d1 = qp134;
    var grade4 = "C";
  }else if ((d == 55) && (k == 100)){
    var d1 = qp135;
    var grade4 = "C";
  }else if ((d == 56) && (k == 100)){
    var d1 = qp136;
    var grade4 = "C";
  }else if ((d == 57) && (k == 100)){
    var d1 = qp137;
    var grade4 = "C";
  }else if ((d == 58) && (k == 100)){
    var d1 = qp138;
    var grade4 = "C";
  }else if ((d == 59) && (k == 100)){
    var d1 = qp139;
    var grade4 = "C";
  }else if ((d == 60) && (k == 100)){
    var d1 = qp140;
    var grade4 = "C";
  }else if ((d == 61) && (k == 100)){
    var d1 = qp141;
    var grade4 = "C";
  }else if ((d == 62) && (k == 100)){
    var d1 = qp142;
    var grade4 = "C";
  }else if ((d == 63) && (k == 100)){
    var d1 = qp143;
    var grade4 = "C";
  }else if ((d == 64) && (k == 100)){
    var d1 = qp144;
    var grade4 = "C";
  }else if ((d == 65) && (k == 100)){
    var d1 = qp145;
    var grade4 = "B";
  }else if ((d == 66) && (k == 100)){
    var d1 = qp146;
    var grade4 = "B";
  }else if ((d == 67) && (k == 100)){
    var d1 = qp147;
    var grade4 = "B";
  }else if ((d == 68) && (k == 100)){
    var d1 = qp148;
    var grade4 = "B";
  }else if ((d == 69) && (k == 100)){
    var d1 = qp149;
    var grade4 = "B";
  }else if ((d == 70) && (k == 100)){
    var d1 = qp150;
    var grade4 = "B";
  }else if ((d == 71) && (k == 100)){
    var d1 = qp151;
    var grade4 = "B";
  }else if ((d == 72) && (k == 100)){
    var d1 = qp152;
    var grade4 = "B";
  }else if ((d == 73) && (k == 100)){
    var d1 = qp153;
    var grade4 = "B";
  }else if ((d == 74) && (k == 100)){
    var d1 = qp154;
    var grade4 = "B";
  }else if ((d == 75) && (k == 100)){
    var d1 = qp155;
    var grade4 = "B";
  }else if ((d == 76) && (k == 100)){
    var d1 = qp156;
    var grade4 = "B";
  }else if ((d == 77) && (k == 100)){
    var d1 = qp157;
    var grade4 = "B";
  }else if ((d == 78) && (k == 100)){
    var d1 = qp158;
    var grade4 = "B";
  }else if ((d == 79) && (k == 100)){
    var d1 = qp159;
    var grade4 = "B";
  }else if ((d >= 80) && (d <= 100) && (k == 100)){
    var d1 = qp160;
    var grade4 = "A";
  }else {
    var d1 = qp20;
    var grade4 = "NaN";
  }



  if ((e == 24) && (l == 60)) {
      var e1 = qp61;
      var grade5 = "D";
  }else if ((e == 25) && (l == 60)) {
    var e1 = qp62;
    var grade5 = "D";
  }else if ((e == 26) && (l == 60)) {
    var e1 = qp63;
    var grade5 = "D";
  }else if ((e == 27) && (l == 60)) {
    var e1 = qp64;
    var grade5 = "D";
  }else if ((e == 28) && (l == 60)) {
    var e1 = qp65;
    var grade5 = "D";
  }else if ((e == 29) && (l == 60)) {
    var e1 = qp66;
    var grade5 = "D";
  }else if ((e == 30) && (l == 60)) {
    var e1 = qp67;
    var grade5 = "C";
  }else if ((e == 31) && (l == 60)) {
    var e1 = qp68;
    var grade5 = "C";
  }else if ((e == 32) && (l == 60)) {
    var e1 = qp69;
    var grade5 = "C";
  }else if ((e == 33) && (l == 60)) {
    var e1 = qp70;
    var grade5 = "C";
  }else if ((e == 34) && (l == 60)) {
    var e1 = qp71;
    var grade5 = "C";
  }else if ((e == 35) && (l == 60)) {
    var e1 = qp72;
    var grade5 = "C";
  }else if ((e == 36) && (l == 60)) {
    var e1 = qp73;
    var grade5 = "C";
  }else if ((e == 37) && (l == 60)) {
    var e1 = qp74;
    var grade5 = "C";
  }else if ((e == 38) && (l == 60)) {
    var e1 = qp75;
    var grade5 = "C";
  }else if ((e == 39) && (l == 60)) {
    var e1 = qp76;
    var grade5 = "B";
  }else if ((e == 40) && (l == 60)) {
    var e1 = qp77;
    var grade5 = "B";
  }else if ((e == 41) && (l == 60)) {
    var e1 = qp78;
    var grade5 = "B";
  }else if ((e == 42) && (l == 60)) {
    var e1 = qp79;
    var grade5 = "B";
  }else if ((e == 43) && (l == 60)) {
    var e1 = qp80;
    var grade5 = "B";
  }else if ((e == 44) && (l == 60)) {
    var e1 = qp81;
    var grade5 = "B";
  }else if ((e == 45) && (l == 60)) {
    var e1 = qp82;
    var grade5 = "B";
  }else if ((e == 46) && (l == 60)) {
    var e1 = qp83;
    var grade5 = "B";
  }else if ((e == 47) && (l == 60)) {
    var e1 = qp84;
    var grade5 = "B";
  }else if ((e >= 48) && (e <= 60) && (l == 60)) {
    var e1 = qp85;
    var grade5 = "A";
  }else if ((e == 8) && (l == 20)) {
    var e1 = qp21;
    var grade5 = "D";
  }else if ((e == 9) && (l == 20)) {
    var e1 = qp22;
    var grade5 = "D";
  }else if ((e == 10) && (l == 20)) {
    var e1 = qp23;
    var grade5 = "C";
  }else if ((e == 11) && (l == 20)) {
    var e1 = qp24;
    var grade5 = "C";
  }else if ((e == 12) && (l == 20)) {
    var e1 = qp25;
    var grade5 = "C";
  }else if ((e == 13) && (l == 20)) {
    var e1 = qp26;
    var grade5 = "B";
  }else if ((e == 14) && (l == 20)) {
    var e1 = qp27;
    var grade5 = "B";
  }else if ((e == 15) && (l == 20)) {
    var e1 = qp28;
    var grade5 = "B";
  }else if ((e >= 16) && (e <= 20) && (l == 20)) {
    var e1 = qp29;
    var grade5 = "A";
  }else if ((e == 16) && (l == 40)) {
    var e1 = qp41;
    var grade5 = "D";
  }else if ((e == 17) && (l == 40)) {
    var e1 = qp42;
    var grade5 = "D";
  }else if ((e == 18) && (l == 40)) {
    var e1 = qp43;
    var grade5 = "D";
  }else if ((e == 19) && (l == 40)) {
    var e1 = qp44;
    var grade5 = "D";
  }else if ((e == 20) && (l == 40)) {
    var e1 = qp45;
    var grade5 = "C";
  }else if ((e == 21) && (l == 40)) {
    var e1 = qp46;
    var grade5 = "C";
  }else if ((e == 22) && (l == 40)) {
    var e1 = qp47;
    var grade5 = "C";
  }else if ((e == 23) && (l == 40)) {
    var e1 = qp48;
    var grade5 = "C";
  }else if ((e == 24) && (l == 40)) {
    var e1 = qp49;
    var grade5 = "C";
  }else if ((e == 25) && (l == 40)) {
    var e1 = qp50;
    var grade5 = "C";
  }else if ((e == 26) && (l == 40)) {
    var e1 = qp51;
    var grade5 = "B";
  }else if ((e == 27) && (l == 40)) {
    var e1 = qp52;
    var grade5 = "B";
  }else if ((e == 28) && (l == 40)) {
    var e1 = qp53;
    var grade5 = "B";
  }else if ((e == 29) && (l == 40)) {
    var e1 = qp54;
    var grade5 = "B";
  }else if ((e == 30) && (l== 40)) {
    var e1 = qp55;
    var grade5 = "B";
  }else if ((e == 31) && (l == 40)) {
    var e1 = qp56;
    var grade5 = "B";
  }else if ((e >= 32) && (e <= 40) && (l == 40)){
    var e1 = qp57;
    var grade5 = "A";
  }else if ((e == 32) && (l == 80)) {
    var e1 = qp86;
    var grade5 = "D";
  }else if ((e == 33) && (l == 80)) {
    var e1 = qp87;
    var grade5 = "D";
  }else if ((e == 34) && (l == 80)) {
    var e1 = qp88;
    var grade5 = "D";
  }else if ((e == 35) && (l == 80)) {
    var e1 = qp89;
    var grade5 = "D";
  }else if ((e == 36) && (l == 80)) {
    var e1 = qp90;
    var grade5 = "D";
  }else if ((e == 37) && (l == 80)) {
    var e1 = qp91;
    var grade5 = "D";
  }else if ((e == 38) && (l == 80)) {
    var e1 = qp92;
    var grade5 = "D";
  }else if ((e == 39) && (l == 80)) {
    var e1 = qp93;
    var grade5 = "D";
  }else if ((e == 40) && (l == 80)) {
    var e1 = qp94;
    var grade5 = "C";
  }else if ((e == 41) && (l == 80)) {
    var e1 = qp95;
    var grade5 = "C";
  }else if ((e == 42) && (l == 80)) {
    var e1 = qp96;
    var grade5 = "C";
  }else if ((e == 43) && (l == 80)) {
    var e1 = qp97;
    var grade5 = "C";
  }else if ((e == 44) && (l == 80)) {
    var e1 = qp98;
    var grade5 = "C";
  }else if ((e == 45) && (l == 80)) {
    var e1 = qp99;
    var grade5 = "C";
  }else if ((e == 46) && (l == 80)) {
    var e1 = qp100;
    var grade5 = "C";
  }else if ((e == 47) && (l == 80)) {
    var e1 = qp101;
    var grade5 = "C";
  }else if ((e == 48) && (l == 80)) {
    var e1 = qp102;
    var grade5 = "C";
  }else if ((e == 49) && (l == 80)) {
    var e1 = qp103;
    var grade5 = "C";
  }else if ((e == 50) && (l == 80)) {
    var e1 = qp104;
    var grade5 = "C";
  }else if ((e == 51) && (l == 80)) {
    var e1 = qp105;
    var grade5 = "C";
  }else if ((e == 52) && (l == 80)) {
    var e1 = qp106;
    var grade5 = "B";
  }else if ((e == 53) && (l == 80)) {
    var e1 = qp107;
    var grade5 = "B";
  }else if ((e == 54) && (l == 80)) {
    var e1 = qp108;
    var grade5 = "B";
  }else if ((e == 55) && (l == 80)) {
    var e1 = qp109;
    var grade5 = "B";
  }else if ((e == 56) && (l == 80)) {
    var e1 = qp110;
    var grade5 = "B";
  }else if ((e == 57) && (l == 80)) {
    var e1 = qp111;
    var grade5 = "B";
  }else if ((e == 58) && (l == 80)) {
    var e1 = qp112;
    var grade5 = "B";
  }else if ((e == 59) && (l == 80)) {
    var e1 = qp113;
    var grade5 = "B";
  }else if ((e == 60) && (l == 80)) {
    var e1 = qp114;
    var grade5 = "B";
  }else if ((e == 61) && (l == 80)) {
    var e1 = qp115;
    var grade5 = "B";
  }else if ((e == 62) && (l == 80)) {
    var e1 = qp116;
    var grade5 = "B";
  }else if ((e == 63) && (l == 80)) {
    var e1 = qp117;
    var grade5 = "B";
  }else if ((e >= 64) && (e <= 80) && (l == 80)) {
    var e1 = qp118;
    var grade5 = "A";
  }else if ((e == 40) && (l == 100)){
    var e1 = qp120;
    var grade5 = "D";
  }else if ((e == 41) && (l == 100)){
    var e1 = qp121;
    var grade5 = "D";
  }else if ((e == 42) && (l == 100)){
    var e1 = qp122;
    var grade5 = "D";
  }else if ((e == 43) && (l == 100)){
    var e1 = qp123;
    var grade5 = "D";
  }else if ((e == 44) && (l == 100)){
    var e1 = qp124;
    var grade5 = "D";
  }else if ((e == 45) && (l == 100)){
    var e1 = qp125;
    var grade5 = "D";
  }else if ((e == 46) && (l == 100)){
    var e1 = qp126;
    var grade5 = "D";
  }else if ((e == 47) && (l == 100)){
    var e1 = qp127;
    var grade5 = "D";
  }else if ((e == 48) && (l == 100)){
    var e1 = qp128;
    var grade5 = "D";
  }else if ((e == 49) && (l == 100)){
    var e1 = qp129;
    var grade5 = "D";
  }else if ((e == 50) && (l == 100)){
    var e1 = qp130;
    var grade5 = "C";
  }else if ((e == 51) && (l == 100)){
    var e1 = qp131;
    var grade5 = "C";
  }else if ((e == 52) && (l == 100)){
    var e1 = qp132;
    var grade5 = "C";
  }else if ((e == 53) && (l == 100)){
    var e1 = qp133;
    var grade5 = "C";
  }else if ((e == 54) && (l == 100)){
    var e1 = qp134;
    var grade5 = "C";
  }else if ((e == 55) && (l == 100)){
    var e1 = qp135;
    var grade5 = "C";
  }else if ((e == 56) && (l == 100)){
    var e1 = qp136;
    var grade5 = "C";
  }else if ((e == 57) && (l == 100)){
    var e1 = qp137;
    var grade5 = "C";
  }else if ((e == 58) && (l == 100)){
    var e1 = qp138;
    var grade5 = "C";
  }else if ((e == 59) && (l == 100)){
    var e1 = qp139;
    var grade5 = "C";
  }else if ((e == 60) && (l == 100)){
    var e1 = qp140;
    var grade5 = "C";
  }else if ((e == 61) && (l == 100)){
    var e1 = qp141;
    var grade5 = "C";
  }else if ((e == 62) && (l == 100)){
    var e1 = qp142;
    var grade5 = "C";
  }else if ((e == 63) && (l == 100)){
    var e1 = qp143;
    var grade5 = "C";
  }else if ((e == 64) && (l == 100)){
    var e1 = qp144;
    var grade5 = "C";
  }else if ((e == 65) && (l == 100)){
    var e1 = qp145;
    var grade5 = "B";
  }else if ((e == 66) && (l == 100)){
    var e1 = qp146;
    var grade5 = "B";
  }else if ((e == 67) && (l == 100)){
    var e1 = qp147;
    var grade5 = "B";
  }else if ((e == 68) && (l == 100)){
    var e1 = qp148;
    var grade5 = "B";
  }else if ((e == 69) && (l == 100)){
    var e1 = qp149;
    var grade5 = "B";
  }else if ((e == 70) && (l == 100)){
    var e1 = qp150;
    var grade5 = "B";
  }else if ((e == 71) && (l == 100)){
    var e1 = qp151;
    var grade5 = "B";
  }else if ((e == 72) && (l == 100)){
    var e1 = qp152;
    var grade5 = "B";
  }else if ((e == 73) && (l == 100)){
    var e1 = qp153;
    var grade5 = "B";
  }else if ((e == 74) && (l == 100)){
    var e1 = qp154;
    var grade5 = "B";
  }else if ((e == 75) && (l == 100)){
    var e1 = qp155;
    var grade5 = "B";
  }else if ((e == 76) && (l == 100)){
    var e1 = qp156;
    var grade5 = "B";
  }else if ((e == 77) && (l == 100)){
    var e1 = qp157;
    var grade5 = "B";
  }else if ((e == 78) && (l == 100)){
    var e1 = qp158;
    var grade5 = "B";
  }else if ((e == 79) && (l == 100)){
    var e1 = qp159;
    var grade5 = "B";
  }else if ((e >= 80) && (e <= 100) && (l == 100)){
    var e1 = qp160;
    var grade5 = "A";
  }else {
    var e1 = qp20;
    var grade5 = "NaN";
  }




  if ((f == 24) && (m == 60)) {
      var f1 = qp61;
      var grade6 = "D";
  }else if ((f == 25) && (m == 60)) {
    var f1 = qp62;
    var grade6 = "D";
  }else if ((f == 26) && (m == 60)) {
    var f1 = qp63;
    var grade6 = "D";
  }else if ((f == 27) && (m == 60)) {
    var f1 = qp64;
    var grade6 = "D";
  }else if ((f == 28) && (m == 60)) {
    var f1 = qp65;
    var grade6 = "D";
  }else if ((f == 29) && (m == 60)) {
    var f1 = qp66;
    var grade6 = "D";
  }else if ((f == 30) && (m == 60)) {
    var f1 = qp67;
    var grade6 = "C";
  }else if ((f == 31) && (m == 60)) {
    var f1 = qp68;
    var grade6 = "C";
  }else if ((f == 32) && (m == 60)) {
    var f1 = qp69;
    var grade6 = "C";
  }else if ((f == 33) && (m == 60)) {
    var f1 = qp70;
    var grade6 = "C";
  }else if ((f == 34) && (m == 60)) {
    var f1 = qp71;
    var grade6 = "C";
  }else if ((f == 35) && (m == 60)) {
    var f1 = qp72;
    var grade6 = "C";
  }else if ((f == 36) && (m == 60)) {
    var f1 = qp73;
    var grade6 = "C";
  }else if ((f == 37) && (m == 60)) {
    var f1 = qp74;
    var grade6 = "C";
  }else if ((f == 38) && (m == 60)) {
    var f1 = qp75;
    var grade6 = "C";
  }else if ((f == 39) && (m == 60)) {
    var f1 = qp76;
    var grade6 = "B";
  }else if ((f == 40) && (m == 60)) {
    var f1 = qp77;
    var grade6 = "B";
  }else if ((f == 41) && (m == 60)) {
    var f1 = qp78;
    var grade6 = "B";
  }else if ((f == 42) && (m == 60)) {
    var f1 = qp79;
    var grade6 = "B";
  }else if ((f == 43) && (m == 60)) {
    var f1 = qp80;
    var grade6 = "B";
  }else if ((f == 44) && (m == 60)) {
    var f1 = qp81;
    var grade6 = "B";
  }else if ((f == 45) && (m == 60)) {
    var f1 = qp82;
    var grade6 = "B";
  }else if ((f == 46) && (m == 60)) {
    var f1 = qp83;
    var grade6 = "B";
  }else if ((f == 47) && (m == 60)) {
    var f1 = qp84;
    var grade6 = "B";
  }else if ((f >= 48) && (f <= 60) && (m == 60)) {
    var f1 = qp85;
    var grade6 = "A";
  }else if ((f == 8) && (m == 20)) {
    var f1 = qp21;
    var grade6 = "D";
  }else if ((f == 9) && (m == 20)) {
    var f1 = qp22;
    var grade6 = "D";
  }else if ((f == 10) && (m == 20)) {
    var f1 = qp23;
    var grade6 = "C";
  }else if ((f == 11) && (m == 20)) {
    var f1 = qp24;
    var grade6 = "C";
  }else if ((f == 12) && (m == 20)) {
    var f1 = qp25;
    var grade6 = "C";
  }else if ((f == 13) && (m == 20)) {
    var f1 = qp26;
    var grade6 = "B";
  }else if ((f == 14) && (m == 20)) {
    var f1 = qp27;
    var grade6 = "B";
  }else if ((f == 15) && (m == 20)) {
    var f1 = qp28;
    var grade6 = "B";
  }else if ((f >= 16) && (f <= 20) && (m == 20)) {
    var f1 = qp29;
    var grade6 = "A";
  }else if ((f == 16) && (m == 40)) {
    var f1 = qp41;
    var grade6 = "D";
  }else if ((f == 17) && (m == 40)) {
    var f1 = qp42;
    var grade6 = "D";
  }else if ((f == 18) && (m == 40)) {
    var f1 = qp43;
    var grade6 = "D";
  }else if ((f == 19) && (m == 40)) {
    var f1 = qp44;
    var grade6 = "D";
  }else if ((f == 20) && (m == 40)) {
    var f1 = qp45;
    var grade6 = "C";
  }else if ((f == 21) && (m == 40)) {
    var f1 = qp46;
    var grade6 = "C";
  }else if ((f == 22) && (m == 40)) {
    var f1 = qp47;
    var grade6 = "C";
  }else if ((f == 23) && (m == 40)) {
    var f1 = qp48;
    var grade6 = "C";
  }else if ((f == 24) && (m == 40)) {
    var f1 = qp49;
    var grade6 = "C";
  }else if ((f == 25) && (m == 40)) {
    var f1 = qp50;
    var grade6 = "C";
  }else if ((f == 26) && (m == 40)) {
    var f1 = qp51;
    var grade6 = "B";
  }else if ((f == 27) && (m == 40)) {
    var f1 = qp52;
    var grade6 = "B";
  }else if ((f == 28) && (m == 40)) {
    var f1 = qp53;
    var grade6 = "B";
  }else if ((f == 29) && (m == 40)) {
    var f1 = qp54;
    var grade6 = "B";
  }else if ((f == 30) && (m == 40)) {
    var f1 = qp55;
    var grade6 = "B";
  }else if ((f == 31) && (m == 40)) {
    var f1 = qp56;
    var grade6 = "B";
  }else if ((f >= 32) && (f <= 40) && (m == 40)){
    var f1 = qp57;
    var grade6 = "A";
  }else if ((f == 32) && (m == 80)) {
    var f1 = qp86;
    var grade6 = "D";
  }else if ((f == 33) && (m == 80)) {
    var f1 = qp87;
    var grade6 = "D";
  }else if ((f == 34) && (m == 80)) {
    var f1 = qp88;
    var grade6 = "D";
  }else if ((f == 35) && (m == 80)) {
    var f1 = qp89;
    var grade6 = "D";
  }else if ((f == 36) && (m == 80)) {
    var f1 = qp90;
    var grade6 = "D";
  }else if ((f == 37) && (m == 80)) {
    var f1 = qp91;
    var grade6 = "D";
  }else if ((f == 38) && (m == 80)) {
    var f1 = qp92;
    var grade6 = "D";
  }else if ((f == 39) && (m == 80)) {
    var f1 = qp93;
    var grade6 = "D";
  }else if ((f == 40) && (m == 80)) {
    var f1 = qp94;
    var grade6 = "C";
  }else if ((f == 41) && (m == 80)) {
    var f1 = qp95;
    var grade6 = "C";
  }else if ((f == 42) && (m == 80)) {
    var f1 = qp96;
    var grade6 = "C";
  }else if ((f == 43) && (m == 80)) {
    var f1 = qp97;
    var grade6 = "C";
  }else if ((f == 44) && (m == 80)) {
    var f1 = qp98;
    var grade6 = "C";
  }else if ((f == 45) && (m == 80)) {
    var f1 = qp99;
    var grade6 = "C";
  }else if ((f == 46) && (m == 80)) {
    var f1 = qp100;
    var grade6 = "C";
  }else if ((f == 47) && (m == 80)) {
    var f1 = qp101;
    var grade6 = "C";
  }else if ((f == 48) && (m == 80)) {
    var f1 = qp102;
    var grade6 = "C";
  }else if ((f == 49) && (m == 80)) {
    var f1 = qp103;
    var grade6 = "C";
  }else if ((f == 50) && (m == 80)) {
    var f1 = qp104;
    var grade6 = "C";
  }else if ((f == 51) && (m == 80)) {
    var f1 = qp105;
    var grade6 = "C";
  }else if ((f == 52) && (m == 80)) {
    var f1 = qp106;
    var grade6 = "B";
  }else if ((f == 53) && (m == 80)) {
    var f1 = qp107;
    var grade6 = "B";
  }else if ((f == 54) && (m == 80)) {
    var f1 = qp108;
    var grade6 = "B";
  }else if ((f == 55) && (m == 80)) {
    var f1 = qp109;
    var grade6 = "B";
  }else if ((f == 56) && (m == 80)) {
    var f1 = qp110;
    var grade6 = "B";
  }else if ((f == 57) && (m == 80)) {
    var f1 = qp111;
    var grade6 = "B";
  }else if ((f == 58) && (m == 80)) {
    var f1 = qp112;
    var grade6 = "B";
  }else if ((f == 59) && (m == 80)) {
    var f1 = qp113;
    var grade6 = "B";
  }else if ((f == 60) && (m == 80)) {
    var f1 = qp114;
    var grade6 = "B";
  }else if ((f == 61) && (m == 80)) {
    var f1 = qp115;
    var grade6 = "B";
  }else if ((f == 62) && (m == 80)) {
    var f1 = qp116;
    var grade6 = "B";
  }else if ((f == 63) && (m == 80)) {
    var f1 = qp117;
    var grade6 = "B";
  }else if ((f >= 64) && (f <= 80) && (m == 80)) {
    var f1 = qp118;
    var grade6 = "A";
  }else if ((f == 40) && (m == 100)){
    var f1 = qp120;
    var grade6 = "D";
  }else if ((f == 41) && (m == 100)){
    var f1 = qp121;
    var grade6 = "D";
  }else if ((f == 42) && (m == 100)){
    var f1 = qp122;
    var grade6 = "D";
  }else if ((f == 43) && (m == 100)){
    var f1 = qp123;
    var grade6 = "D";
  }else if ((f == 44) && (m == 100)){
    var f1 = qp124;
    var grade6 = "D";
  }else if ((f == 45) && (m == 100)){
    var f1 = qp125;
    var grade6 = "D";
  }else if ((f == 46) && (m == 100)){
    var f1 = qp126;
    var grade6 = "D";
  }else if ((f == 47) && (m == 100)){
    var f1 = qp127;
    var grade6 = "D";
  }else if ((f == 48) && (m == 100)){
    var f1 = qp128;
    var grade6 = "D";
  }else if ((f == 49) && (m == 100)){
    var f1 = qp129;
    var grade6 = "D";
  }else if ((f == 50) && (m == 100)){
    var f1 = qp130;
    var grade6 = "C";
  }else if ((f == 51) && (m == 100)){
    var f1 = qp131;
    var grade6 = "C";
  }else if ((f == 52) && (m == 100)){
    var f1 = qp132;
    var grade6 = "C";
  }else if ((f == 53) && (m == 100)){
    var f1 = qp133;
    var grade6 = "C";
  }else if ((f == 54) && (m == 100)){
    var f1 = qp134;
    var grade6 = "C";
  }else if ((f == 55) && (m == 100)){
    var f1 = qp135;
    var grade6 = "C";
  }else if ((f == 56) && (m == 100)){
    var f1 = qp136;
    var grade6 = "C";
  }else if ((f == 57) && (m == 100)){
    var f1 = qp137;
    var grade6 = "C";
  }else if ((f == 58) && (m == 100)){
    var f1 = qp138;
    var grade6 = "C";
  }else if ((f == 59) && (m == 100)){
    var f1 = qp139;
    var grade6 = "C";
  }else if ((f == 60) && (m == 100)){
    var f1 = qp140;
    var grade6 = "C";
  }else if ((f == 61) && (m == 100)){
    var f1 = qp141;
    var grade6 = "C";
  }else if ((f == 62) && (m == 100)){
    var f1 = qp142;
    var grade6 = "C";
  }else if ((f == 63) && (m == 100)){
    var f1 = qp143;
    var grade6 = "C";
  }else if ((f == 64) && (m == 100)){
    var f1 = qp144;
    var grade6 = "C";
  }else if ((f == 65) && (m == 100)){
    var f1 = qp145;
    var grade6 = "B";
  }else if ((f == 66) && (m == 100)){
    var f1 = qp146;
    var grade6 = "B";
  }else if ((f == 67) && (m == 100)){
    var f1 = qp147;
    var grade6 = "B";
  }else if ((f == 68) && (m == 100)){
    var f1 = qp148;
    var grade6 = "B";
  }else if ((f == 69) && (m == 100)){
    var f1 = qp149;
    var grade6 = "B";
  }else if ((f == 70) && (m == 100)){
    var f1 = qp150;
    var grade6 = "B";
  }else if ((f == 71) && (m == 100)){
    var f1 = qp151;
    var grade6 = "B";
  }else if ((f == 72) && (m == 100)){
    var f1 = qp152;
    var grade6 = "B";
  }else if ((f == 73) && (m == 100)){
    var f1 = qp153;
    var grade6 = "B";
  }else if ((f == 74) && (m == 100)){
    var f1 = qp154;
    var grade6 = "B";
  }else if ((f == 75) && (m == 100)){
    var f1 = qp155;
    var grade6 = "B";
  }else if ((f == 76) && (m == 100)){
    var f1 = qp156;
    var grade6 = "B";
  }else if ((f == 77) && (m == 100)){
    var f1 = qp157;
    var grade6 = "B";
  }else if ((f == 78) && (m == 100)){
    var f1 = qp158;
    var grade6 = "B";
  }else if ((f == 79) && (m == 100)){
    var f1 = qp159;
    var grade6 = "B";
  }else if ((f >= 80) && (f <= 100) && (m == 100)){
    var f1 = qp160;
    var grade6 = "A";
  }else {
    var f1 = qp20;
    var grade6 = "NaN";
  }

  var totalsumob = parseFloat(a) + parseFloat(b) + parseFloat(c) + parseFloat(d) + parseFloat(e) + parseFloat(f);
  var totalsum = parseFloat(h) + parseFloat(i) + parseFloat(j) + parseFloat(k) + parseFloat(l) + parseFloat(m);
  var gpacontainer = document.getElementById("r");
  var details = document.getElementById("detail");
  var err = document.getElementById("error");
  if (g == ""){
    gpacontainer.classList.add("hidden");
    gpacontainer.classList.remove("visible");
    err.classList.add("visible");
    err.classList.remove("hidden");
    err.textContent = "Something went wrong please check your provided values & try again.";
    return false;
  }else if ((g >= "1") && (g >= "100")){
    gpacontainer.classList.add("visible");
    gpacontainer.classList.remove("hidden");
    err.classList.add("hidden");
    err.classList.remove("visible");
    sum = parseFloat(a1) + parseFloat(b1) + parseFloat(c1) + parseFloat(d1) + parseFloat(e1) + parseFloat(f1);
    var raw = (sum/g);
    var result = raw.toFixed(2); //reduce resultant number upto 2 decimal points.
    gpacontainer.textContent = "Your GPA is:  "+ result;

    //for percentage calculation.
    per1 = ((a/h)*100);
    per1f = per1.toFixed(2);
    per2 = ((b/i)*100);
    per2f = per2.toFixed(2);
    per3 = ((c/j)*100);
    per3f = per3.toFixed(2);
    per4 = ((d/k)*100);
    per4f = per4.toFixed(2);
    per5 = ((e/l)*100);
    per5f = per5.toFixed(2);
    per6 = ((f/m)*100);
    per6f = per6.toFixed(2);
    per = ((totalsumob/totalsum)*100);
    perf = per.toFixed(2);

    //FILL THE TABLE  
    cell1quapo.textContent = a1;
    cell2quapo.textContent = b1;
    cell3quapo.textContent = c1;
    cell4quapo.textContent = d1;
    cell5quapo.textContent = e1;
    cell6quapo.textContent = f1;
    celltquapo.textContent = sum;
    cell1OM.textContent = a;
    cell2OM.textContent = b;
    cell3OM.textContent = c;
    cell4OM.textContent = d;
    cell5OM.textContent = e;
    cell6OM.textContent = f;
    celltOM.textContent = totalsumob;
    cell1gr.textContent = grade1;
    cell2gr.textContent = grade2;
    cell3gr.textContent = grade3;
    cell4gr.textContent = grade4;
    cell5gr.textContent = grade5;
    cell6gr.textContent = grade6;
    cell1pr.textContent = per1f;
    cell2pr.textContent = per2f;
    cell3pr.textContent = per3f;
    cell4pr.textContent = per4f;
    cell5pr.textContent = per5f;
    cell6pr.textContent = per6f;
    celltpr.textContent = perf;

  }

  //display more detail button
  //details = document.getElementById("detail");
  if (err.classList.contains("visible")){
    details.classList.add("hidden");
    details.classList.remove("visible");
  }else if (err.classList.contains("hidden")){
    details.classList.add("visible");
    details.classList.remove("hidden");
  }


  

  
return false;

}
function table(){
  //show details table
  details = document.getElementById("detail");
  moreinfo = document.getElementById("info");
  moreinfo.classList.toggle("visible");
  moreinfo.classList.toggle("hidden");

  if (moreinfo.classList.contains("visible")) {
    details.textContent = "Hide Details -";
  }else if (moreinfo.classList.contains("hidden")){
    details.textContent = "Show Details +";
  }

}


console.log("All Good");

