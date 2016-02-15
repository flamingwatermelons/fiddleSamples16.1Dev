$(function () {
var northwindEmployees = [
	{ "ID": 1, "Name": "Davolio, Nancy", "Title": "Sales Representative", "ImageUrl": "http://dev.igniteui.local/16-1/images/samples/nw/employees/1.png", "Phone": "(206) 555-9857", "PhoneUrl": "tel:(206) 555-9857", "BirthDate": "\/Date(480808800000)\/", "HireDate": "\/Date(1224795600000)\/", "Country": "USA", "City": "Seattle", "Address": "507 - 20th Ave. E.\r\nApt. 2A" },
	{ "ID": 2, "Name": "Fuller, Andrew", "Title": "Vice President, Sales", "ImageUrl": "http://dev.igniteui.local/16-1/images/samples/nw/employees/2.png", "Phone": "(206) 555-9482", "PhoneUrl": "tel:(206) 555-9482", "BirthDate": "\/Date(433458000000)\/", "HireDate": "\/Date(1269640800000)\/", "Country": "USA", "City": "Tacoma", "Address": "908 W. Capital Way" },
	{ "ID": 3, "Name": "Leverling, Janet", "Title": "Sales Representative", "ImageUrl": "http://dev.igniteui.local/16-1/images/samples/nw/employees/3.png", "Phone": "(206) 555-3412", "PhoneUrl": "tel:(206) 555-3412", "BirthDate": "\/Date(268088400000)\/", "HireDate": "\/Date(1318453200000)\/", "Country": "USA", "City": "Kirkland", "Address": "722 Moss Bay Blvd." },
	{ "ID": 4, "Name": "Peacock, Margaret", "Title": "Sales Representative", "ImageUrl": "http://dev.igniteui.local/16-1/images/samples/nw/employees/4.png", "Phone": "(206) 555-8122", "PhoneUrl": "tel:(206) 555-8122", "BirthDate": "\/Date(377388000000)\/", "HireDate": "\/Date(1171404000000)\/", "Country": "USA", "City": "Redmond", "Address": "4110 Old Redmond Rd." },
	{ "ID": 5, "Name": "Buchanan, Steven", "Title": "Sales Manager", "ImageUrl": "http://dev.igniteui.local/16-1/images/samples/nw/employees/5.png", "Phone": "(71) 555-4848", "PhoneUrl": "tel:(71) 555-4848", "BirthDate": "\/Date(-110084400000)\/", "HireDate": "\/Date(955573200000)\/", "Country": "UK", "City": "London", "Address": "14 Garrett Hill" },
	{ "ID": 6, "Name": "Suyama, Michael", "Title": "Sales Representative", "ImageUrl": "http://dev.igniteui.local/16-1/images/samples/nw/employees/6.png", "Phone": "(71) 555-7773", "PhoneUrl": "tel:(71) 555-7773", "BirthDate": "\/Date(44744400000)\/", "HireDate": "\/Date(1125090000000)\/", "Country": "UK", "City": "London", "Address": "Coventry House\r\nMiner Rd." },
	{ "ID": 7, "Name": "King, Robert", "Title": "Sales Representative", "ImageUrl": "http://dev.igniteui.local/16-1/images/samples/nw/employees/7.png", "Phone": "(71) 555-5598", "PhoneUrl": "tel:(71) 555-5598", "BirthDate": "\/Date(-213760800000)\/", "HireDate": "\/Date(907794000000)\/", "Country": "UK", "City": "London", "Address": "Edgeham Hollow\r\nWinchester Way" },
	{ "ID": 8, "Name": "Callahan, Laura", "Title": "Inside Sales Coordinator", "ImageUrl": "http://dev.igniteui.local/16-1/images/samples/nw/employees/8.png", "Phone": "(206) 555-1189", "PhoneUrl": "tel:(206) 555-1189", "BirthDate": "\/Date(318828800000)\/", "HireDate": "\/Date(962825600000)\/", "Country": "USA", "City": "Seattle", "Address": "4726 - 11th Ave. N.E." },
	{ "ID": 9, "Name": "Dodsworth, Anne", "Title": "Sales Representative", "ImageUrl": "http://dev.igniteui.local/16-1/images/samples/nw/employees/9.png", "Phone": "(71) 555-4444", "PhoneUrl": "tel:(71) 555-4444", "BirthDate": "\/Date(444952800000)\/", "HireDate": "\/Date(1246395600000)\/", "Country": "UK", "City": "London", "Address": "7 Houndstooth Rd." }
		];
		$(function () {
			$("#grid-mrl").igGrid({
				dataSource: northwindEmployees,
				autoCommit: true,
				width: "100%",
				autoGenerateColumns: false,
				primaryKey: "ID",
				columns: [
			{ headerText: "Image", key: "ImageUrl", dataType: "object", template: "<img width='100' height='90' src='${ImageUrl}' alt='${Name}' title='${Name}' />", columnIndex: 0, rowIndex: 0, rowSpan: 2, colSpan: 2, width: "25%" },
			{ headerText: "Employee ID", key: "ID", dataType: "number", columnIndex: 0, rowIndex: 2 , width: "15%"},
			{ headerText: "Country", key: "Country", dataType: "string", columnIndex: 1, rowIndex: 2, width: "10%" },
			{ headerText: "City", key: "City", dataType: "string", columnIndex: 2, rowIndex: 2 },
			{ headerText: "Phone", key: "Phone", dataType: "string", columnIndex: 3, rowIndex: 2 },
			{ headerText: "Name", key: "Name", dataType: "string", columnIndex: 2, rowIndex: 0, width: "30%" },
			{ headerText: "Address", key: "Address", dataType: "string", columnIndex: 3, rowIndex: 0, rowSpan: 2, width: "45%" },
			{ headerText: "Title", key: "Title", dataType: "string", columnIndex: 2, rowIndex: 1 }
				],
				autofitLastColumn: false,
				features: [
					{ name: "Paging", pageSize: 3 },
					{
						name: "Updating", editMode: "dialog",
						rowEditDialogOptions: {showReadonlyEditors: false},
						columnSettings : [
							{ columnKey: "ImageUrl", readOnly: true }
						]
					},
					{
						name: "Filtering", mode: "advanced",
						columnSettings : [
						 { columnKey: "ImageUrl", allowFiltering: false }]
					}, {
						name: "Sorting", 
						columnSettings: [
						 { columnKey: "ImageUrl",  allowSorting: false }]
					}
				]
			});
		});
});