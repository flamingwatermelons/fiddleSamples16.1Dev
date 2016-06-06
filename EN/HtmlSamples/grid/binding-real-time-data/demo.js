$(function () {
			var refreshCount = 0, intervalId = 0, doUpdate = null,
				toggleFeed = null, started = false,
				generateInitialUpdatesList = null,
				updatesList = {};

			stockData = stockData.splice(0,15);

			$("#startDataFeed").igButton({ labelText: $("#startDataFeed").val() });
			$("#startDataFeed").click(function () {
				toggleFeed(true);
			});

			$("#intervalSlider").slider({
				slide: function (event, ui) {
					$("#intervalText").text(ui.value.toString());
					toggleFeed(false);
					toggleFeed(false);
				},
				min: 500,
				max: 3000,
				value: 400,
				step: 500
			});

			generateInitialUpdatesList = function () {
				$(stockData).each(function () {
					if (!updatesList[this.ID]) {
						updatesList[this.ID] = [];
					}
					//generate some data
					var currPrice = this.Price;
					for (var i = 0; i < 10; i++) {
						var res = generateNewPrice(currPrice);
						currPrice = res.Price;
						updatesList[this.ID].push({ price: res.Price });
					}
					updatesList[this.ID].push({ price: this.Price });
				});

			};
			getRandomInt = function (min, max) {
				return Math.floor(Math.random() * (max - min)) + min;
			}

			toggleFeed = function (changeButton) {
				var updateTicks = parseInt($("#intervalText").text());
				if (!started) {
					started = true;
					if (changeButton) {
						$("#startDataFeed").igButton({ labelText: 'Stop Data Feed' });
					}
					intervalId = window.setInterval(function () {
						doUpdate();
					}, updateTicks);
				} else {
					started = false;
					if (changeButton) {
						$("#startDataFeed").igButton({ labelText: 'Start Data Feed' });
					}
					window.clearInterval(intervalId);
				}
			};
			doUpdate = function () {
				//update random number of records

				var numberOfRecsToUpdate = getRandomInt(0,5);
				var indexesToUpdate =[];
				for (var i = 0; i < numberOfRecsToUpdate; i++) {
					var randValue = getRandomInt(0, stockData.length);
					if (indexesToUpdate.contains(randValue)) { 
						randValue = getRandomInt(0, stockData.length);
					}
					indexesToUpdate.push(randValue);
				}

				for (var j = 0; j < numberOfRecsToUpdate; j++) {
					var rec = this.stockData[indexesToUpdate[j]];
					var newValues = generateNewPrice(rec.Price);
					updatesList[rec.ID].push({ price: newValues.Price });
					rec.Price = parseFloat(newValues.Price);
					rec.Change = parseFloat(newValues.ChangePercent);

					$("#grid").igGridUpdating("updateRow", rec.ID, rec);
					renderCharts(rec.ID);

					//apply additional css to the updated record's Price and Change columns
					var row = $("#grid").igGrid("rowById", rec.ID);
					var spans = row.find("td[aria-describedby='grid_Price'], td[aria-describedby='grid_Change']").find("span");
					if (newValues.ChangePercent < 0) {
						spans.addClass("price-down").removeClass("price-down", 2000);
					} else {
						spans.addClass("price-up").removeClass("price-up", 2000);
					}
				}
			};

			renderCharts = function (recID) {
				if (recID) {
					//render specific chart
					$("div.sparkline[data-id=" + recID + "]").igSparkline({
						dataSource: updatesList[recID],
						height: "25px",
						width: "100%",
						valueMemberPath: 'price'
					}).css("background-color", "transparent");
				} else { 
					//render all
					$(".sparkline").each(function (i) {
						var id = $(this).attr("data-id");
						$(this).igSparkline({
							dataSource: updatesList[id],
							height: "25px",
							width: "100%",
							valueMemberPath: 'price'
						})
						.css("background-color", "transparent");
					});
				}
			}

			generateNewPrice = function (oldPrice) {
				oldPrice = parseFloat(oldPrice);
				var rnd = Math.random();
				var volatility = 2;
				var newPrice = 0;
				var changePercent = 2 * volatility * rnd;
				if (changePercent > volatility) {
					changePercent -= (2 * volatility);
				}
				changeAmount = oldPrice * (changePercent / 100);
				newPrice = oldPrice + changeAmount;

				return { Price: newPrice.toFixed(2), ChangePercent: changePercent.toFixed(2) };
			}

			generateInitialUpdatesList();

			$("#grid").igGrid({
				dataSource: stockData,
				autoCommit:true,
				width: "100%",
				primaryKey: "ID",
				columns: [
					{ headerText: "ID", key: "ID", dataType: "string", hidden: true },
					{ headerText: "Company Name", key: "CompanyName", dataType: "string" },
					{ headerText: "Volume", key: "Volume", dataType: "string" },
					{ headerText: "Price", key: "Price", dataType: "number", template: "<span>${Price}</span>" },
					{
						headerText: "Change", key: "Change", dataType: "number", format: "number", template: $("#colTmpl").html()
					},
					{
						headerText: "Price Change", key: "PriceChange", unbound: true, template: "<div data-id='${ID}' class='sparkline'></div>"
					}
				],
				rowsRendered: function (evt, ui) {
					renderCharts();
				},
				features: [{ name: "Updating", editMode: "none", enableAddRow: false, enableDeleteRow:false }]
			});
		});