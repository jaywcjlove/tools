"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[637],{2637:function(n,e,r){r.r(e),r.d(e,{default:function(){return f}});var t={};r.r(t),r.d(t,{json:function(){return d},val:function(){return l}});var a=r(7857),i=r(3808),o=r(7851),s=r(6023),d='{\n  "any_name": {\n    "person": {\n      "phone": [\n          122233344553,\n          122233344554\n      ],\n      "name": "Boris",\n      "age": 34,\n      "married": "Yes",\n      "birthday": "Mon, 31 Aug 1970 02:03:04 +0300",\n      "address": [\n          {\n              "city": "Moscow",\n              "street": "Kahovka",\n              "buildingNo": 1,\n              "flatNo": 2\n          },\n          {\n              "city": "Tula",\n              "street": "Lenina",\n              "buildingNo": 3,\n              "flatNo": 78\n          }\n      ]\n    }\n  }\n}',l='<any_name>\n  <person>\n    <phone>+122233344550</phone>\n    <name>Jack</name>\n    <phone>+122233344551</phone>\n    <age>33</age>\n    <married firstTime="No">Yes</married>\n    <birthday>Wed, 28 Mar 1979 12:13:14 +0300</birthday>\n    <address>\n      <city>New York</city>\n      <street>Park Ave</street>\n      <buildingNo>1</buildingNo>\n      <flatNo>1</flatNo>\n    </address>\n    <address>\n      <city>Boston</city>\n      <street>Centre St</street>\n      <buildingNo>33</buildingNo>\n      <flatNo>24</flatNo>\n    </address>\n  </person>\n  <person>\n    <phone>+122233344553</phone>\n    <name>Boris</name>\n    <phone>+122233344554</phone>\n    <age>34</age>\n    <married firstTime="Yes">Yes</married>\n    <birthday>Mon, 31 Aug 1970 02:03:04 +0300</birthday>\n    <address>\n      <city>Moscow</city>\n      <street>Kahovka</street>\n      <buildingNo>1</buildingNo>\n      <flatNo>2</flatNo>\n    </address>\n    <address>\n      <city>Tula</city>\n      <street>Lenina</street>\n      <buildingNo>3</buildingNo>\n      <flatNo>78</flatNo>\n    </address>\n  </person>\n</any_name>',u=r(1121);function f(){return(0,u.jsx)(a.cE,{sample:t,leftProps:{title:"JSON",extensions:[(0,o.AV)()],onLeftInput:function(n){var e=JSON.parse(n);return new i.XMLBuilder({format:!0}).build(e)}},rightProps:{title:"XML",extensions:[(0,s.Ls)()],onRightInput:function(n){var e=new i.XMLParser({}),r=i.XMLValidator.validate(n,{});if("boolean"!==typeof r&&r.err)throw new Error("XML: "+r.err.msg+", line: "+r.err.line+", col: "+r.err.col);return JSON.stringify(e.parse(n),null,2)}}})}}}]);
//# sourceMappingURL=637.40af3336.chunk.js.map