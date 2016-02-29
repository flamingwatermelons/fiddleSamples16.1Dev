$(function () {
			var ds = [
				{
					"name": "Emerging Companies", "tradingSymbol": "-", "issuedShares": 117.8, "workingCapital": 56.95, "marketCap": 93.85, "bookValue": 87.3, "marketPremium": 86.35, "ttmSales": 53.95, "ttmEarnings": 71.93, "companies": [
						{ "name": "A123 Systems", "tradingSymbol": "AONE", "issuedShares": 146.9, "workingCapital": 201.8, "marketCap": 164.5, "bookValue": 264.9, "marketPremium": 100.4, "ttmSales": 159.1, "ttmEarnings": 257.7 },
						{ "name": "Valence Technology", "tradingSymbol": "VLNC", "issuedShares": 170.0, "workingCapital": 12.9, "marketCap": 137.7, "bookValue": 59.2, "marketPremium": 196.9, "ttmSales": 45.0, "ttmEarnings": 12.7 },
						{ "name": "Axion Power", "tradingSymbol": "AXPW.OB", "issuedShares": 113.2, "workingCapital": 12.9, "marketCap": 45.3, "bookValue": 19.3, "marketPremium": 26.0, "ttmSales": 8.1, "ttmEarnings": 8.3 },
						{ "name": "ZBB Energy", "tradingSymbol": "ZBB", "issuedShares": 41.1, "workingCapital": 0.2, "marketCap": 27.9, "bookValue": 5.8, "marketPremium": 22.1, "ttmSales": 3.6, "ttmEarnings": 9.0 }
					]
				},
				{
					"name": "Sustainable Companies", "tradingSymbol": "-", "issuedShares": 157.92, "workingCapital": 483.35, "marketCap": 4113.65, "bookValue": 2147.03, "marketPremium": 2027.07, "ttmSales": 7900.07, "ttmEarnings": 307.25, "companies": [
						{ "name": "Maxwell Technologies", "tradingSymbol": "MXWL", "issuedShares": 28.2, "workingCapital": 46.2, "marketCap": 517.1, "bookValue": 103.3, "marketPremium": 413.8, "ttmSales": 157.3, "ttmEarnings": 0.8 },
						{ "name": "Ultralife Corporation", "tradingSymbol": "ULBI", "issuedShares": 17.4, "workingCapital": 41.1, "marketCap": 89.9, "bookValue": 73.2, "marketPremium": 16.7, "ttmSales": 139.4, "ttmEarnings": 2.1 },
						{ "name": "Johnoson Controls", "tradingSymbol": "JCI", "issuedShares": 680.5, "workingCapital": 1734.0, "marketCap": 22101.2, "bookValue": 11278.0, "marketPremium": 10823.2, "ttmSales": 41713.0, "ttmEarnings": 1659.0 },
						{ "name": "Enersys", "tradingSymbol": "ENS", "issuedShares": 47.7, "workingCapital": 542.0, "marketCap": 1654.3, "bookValue": 976.0, "marketPremium": 678.2, "ttmSales": 2238.6, "ttmEarnings": 128.7 },
						{ "name": "Exide Technologies", "tradingSymbol": "XIDE", "issuedShares": 78.3, "workingCapital": 514.0, "marketCap": 245.0, "bookValue": 426.4, "marketPremium": 181.4, "ttmSales": 3076.6, "ttmEarnings": 45.8 },
						{ "name": "Active Power", "tradingSymbol": "ACPW", "issuedShares": 95.4, "workingCapital": 22.8, "marketCap": 74.4, "bookValue": 25.3, "marketPremium": 49.1, "ttmSales": 75.5, "ttmEarnings": 7.1 }
					]
				},
				{
					"name": "Battery Companies", "tradingSymbol": "-", "issuedShares": 48.97, "workingCapital": 48.60, "marketCap": 40.33, "bookValue": 72.57, "marketPremium": 32.23, "ttmSales": 111.73, "ttmEarnings": 11.63, "companies": [
						{ "name": "Altair Nanotechnologies", "tradingSymbol": "ALTI", "issuedShares": 69.5, "workingCapital": 46.3, "marketCap": 41.7, "bookValue": 53.5, "marketPremium": 11.8, "ttmSales": 5.2, "ttmEarnings": 19.9 },
						{ "name": "China BAK Battery", "tradingSymbol": "CBAK", "issuedShares": 63.8, "workingCapital": 98.2, "marketCap": 65.7, "bookValue": 135.5, "marketPremium": 69.8, "ttmSales": 219.4, "ttmEarnings": 12.5 },
						{ "name": "Highpower International", "tradingSymbol": "HPJ", "issuedShares": 13.6, "workingCapital": 1.3, "marketCap": 13.6, "bookValue": 28.7, "marketPremium": 15.1, "ttmSales": 110.6, "ttmEarnings": 2.5 }
					]
				},
				{
					"name": "EV Manufacturers", "tradingSymbol": "-", "issuedShares": 56.17, "workingCapital": 75.07, "marketCap": 1347.83, "bookValue": 105.10, "marketPremium": 1242.67, "ttmSales": 88.83, "ttmEarnings": 89.07, "companies": [
						{ "name": "Tesla Motors", "tradingSymbol": "TSLA", "issuedShares": 104.6, "workingCapital": 181.5, "marketCap": 3895.5, "bookValue": 224.0, "marketPremium": 3671.4, "ttmSales": 204.2, "ttmEarnings": 254.4 },
						{ "name": "Kandi Technologies", "tradingSymbol": "KNDI", "issuedShares": 27.4, "workingCapital": 17.5, "marketCap": 93.9, "bookValue": 55.8, "marketPremium": 38.0, "ttmSales": 40.2, "ttmEarnings": 9.1 },
						{ "name": "UQM Technologies", "tradingSymbol": "UQM", "issuedShares": 36.5, "workingCapital": 26.2, "marketCap": 54.1, "bookValue": 35.5, "marketPremium": 18.6, "ttmSales": 22.1, "ttmEarnings": 3.7 }
					]
				}
			];

			$("#treegrid").igTreeGrid({
				width: "100%",
				dataSource: ds, //bound to hierarchical data source,
				autoGenerateColumns: true,
				primaryKey: "name",
				childDataKey: "companies",
				autoCommit: true,
				initialExpandDepth: 2,
				columns: [
					{ headerText: "Company", key: "name", width: "250px", dataType: "string" },
					{ headerText: "Trading Symbol", key: "tradingSymbol", width: "130px", dataType: "string" },
					{ headerText: "Issued Shares", key: "issuedShares", width: "130px", dataType: "number" },
					{ headerText: "Working Capital", key: "workingCapital", width: "130px", dataType: "number", format: "currency" },
					{ headerText: "Market Cap", key: "marketCap", width: "130px", dataType: "number", format: "currency" },
					{ headerText: "Book Value", key: "bookValue", width: "130px", dataType: "number", format: "currency" },
					{ headerText: "Market Premium", key: "marketPremium", width: "130px", dataType: "number", format: "currency" },
					{ headerText: "TTM Sales", key: "ttmSales", width: "130px", dataType: "number", format: "currency" },
					{ headerText: "TTM Earnings", key: "ttmEarnings", width: "130px", dataType: "number", format: "currency" }
				],
				features: [
					{
						name: 'Updating',
						enableAddChild: true
					}
				]
			});
		});