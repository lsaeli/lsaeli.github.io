*{
	margin: 0;
	padding: 0;
	list-style: none;
	text-decoration: none;
}

body{
	display: flex;
	justify-content: center;
	margin: 75px 0;
}

.box_item{
	width: 400px;
	height: 400px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-family: 'Open Sans';
	font-size: 30px;
	font-weight: 800;
	background-position: center;
	background-repeat: no-repeat;
	background-image: url(../images/cat.jpg);
	background-size: cover;
	color: white;
	padding: 20px;
}

.box_item:hover{
	font-size: 0;
}

.box_item:hover:after{
	content: attr(data-hover);
	font-size: 24px;
	line-height: 28px;
	font-weight: 200;
	text-align: center;
}