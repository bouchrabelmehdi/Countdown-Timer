				TargetDate = new Date("10/14/2020 11:30 PM");
				BackColor = "transparent";
				ForeColor = "#3c1f81";
				CountActive = true;
				CountStepper = -1;
				LeadingZero = true;
				DisplayFormat = "%%D%% Days, %%H%% Hours, %%M%% Minutes, %%S%% Seconds";
				FinishMessage = "Ended";
				
				
                function calcage(secs, num1, num2){
					s = ((Math.floor(secs/num1))%num2).toString();
                        if (LeadingZero && s.length < 2)
                            s = "0" + s;
                        return " " + s + " ";
                }

                function CountBack(secs){
                    if (secs < 0) {
                        document.getElementById("counter").innerHTML = FinishMessage;
                    return;
                    }

                    DisplayStr = DisplayFormat.replace(/%%D%%/g, calcage(secs,86400,100000));
                    DisplayStr = DisplayStr.replace(/%%H%%/g, calcage(secs,3600,24));
                    DisplayStr = DisplayStr.replace(/%%M%%/g, calcage(secs,60,60));
                    DisplayStr = DisplayStr.replace(/%%S%%/g, calcage(secs,1,60));

                    document.getElementById("counter").innerHTML = DisplayStr;

                    if (CountActive){
                        setTimeout("CountBack(" + (secs+CountStepper) + ")", SetTimeOutPeriod);
                    }
				}
                
				function putspan(backcolor, forecolor){
                        document.write("<span id='counter' style='background-color:" + backcolor + "; color:" + forecolor + "'></span>");
                }
				
				if (typeof(BackColor)=="undefined")
                    BackColor = "white";

                if (typeof(ForeColor)=="undefined")
                    ForeColor= "black";

                if (typeof(TargetDate)=="undefined")
                    TargetDate = "7/17/2018 4:00 PM";

                if (typeof(DisplayFormat)=="undefined")
                    DisplayFormat = "%%D%% Days, %%H%% Hours, %%M%% Minutes, %%S%% Seconds.";

                if (typeof(CountActive)=="undefined")
                    CountActive = true;

                if (typeof(FinishMessage)=="undefined")
                    FinishMessage = "";

                if (typeof(CountStepper)!="number")
                    CountStepper = -1;

                if (typeof(LeadingZero)=="undefined")
                    LeadingZero = true;
                
				CountStepper = Math.ceil(CountStepper);
                    if (CountStepper === 0)
                        CountActive = false;
                        var SetTimeOutPeriod = (Math.abs(CountStepper)-1)*1000 + 990;
                        putspan(BackColor, ForeColor);
                        var dthen = new Date(TargetDate);
                        var dnow = new Date();

                    if(CountStepper>0)
                        ddiff = new Date(dnow-dthen);

                    else
                        ddiff = new Date(dthen-dnow);

                    gsecs = Math.floor(ddiff.valueOf()/1000);

                    CountBack(gsecs);
