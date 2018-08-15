<p align="center">
    <img src="/public/images/logo.png"/>
</p>
<p align="center">
    <strong>Board Template Project</strong>
</p>

Node.js를 기반으로 제작한 게시판 템플릿으로, 기본적인 웹 사이트 디자인과 게시판 기능들을 제작해둔 프로젝트 입니다. 공부 및 타 프로젝트에 쉽게 적용하기 위해 제작하게 되었으며 버그 및 개선에 대해서 다양한 피드백 부탁드립니다.


## Database Setting
### Create Database
```js
> use btDB
```

### Auto Increment function
```js
> function autoInc(id) {
	var ret = db.incCol.findAndModify({
		query:{_id:id},
		update: {$inc: {incNum:1}},
		"new":true,
		upsert:true
	});
	return ret.incNum;
}
```
임시 데이터를 생성하기 이전에 MongoDB에서의 `auto increment`를 위해 위 함수를 선언해 주시길 바랍니다.
`auto increment`가 작동하는 방식이라면, 꼭 위의 함수를 사용하지 않아도 됩니다.

### Insert BBS Temp Data
```js
> db.bbs.insertMany([
    {idx:autoInc("bbs"), title:"This is temp Title _ 0", author:"kyechan", date:new Date()},
    {idx:autoInc("bbs"), title:"This is temp Title _ 1", author:"John", date:new Date()},
    {idx:autoInc("bbs"), title:"This is temp Title _ 2", author:"Andrew", date:new Date()},
    {idx:autoInc("bbs"), title:"This is temp Title _ 3", author:"Henry", date:new Date()},
    {idx:autoInc("bbs"), title:"This is temp Title _ 4", author:"Park", date:new Date()},
    {idx:autoInc("bbs"), title:"This is temp Title _ 5", author:"Kim K", date:new Date()},
    {idx:autoInc("bbs"), title:"This is temp Title _ 6", author:"Park", date:new Date()},
    {idx:autoInc("bbs"), title:"This is temp Title _ 7", author:"Yahn", date:new Date()},
    {idx:autoInc("bbs"), title:"This is temp Title _ 8", author:"kyechan", date:new Date()},
    {idx:autoInc("bbs"), title:"This is temp Title _ 9", author:"Kang", date:new Date()},
    {idx:autoInc("bbs"), title:"This is temp Title _ 10", author:"Henry", date:new Date()},
    {idx:autoInc("bbs"), title:"This is temp Title _ 11", author:"Andrew", date:new Date()}
])
```
임시 데이터들입니다.
If you need more temp data -> [moreTempData](https://github.com/kyechan99/BoardTemplate/blob/master/moreTempData.txt)

### Insert User Temp Data
```js
> db.users.insertMany([
    {idx:autoInc("users"), id:"test", pw:"test"},
    {idx:autoInc("users"), id:"root", pw:"1234"},
    {idx:autoInc("users"), id:"kyechan", pw:"1234"},
    {idx:autoInc("users"), id:"John", pw:"1234"}
])
```


## Preview
<img src="/public/images/preview.png" width=100%/>