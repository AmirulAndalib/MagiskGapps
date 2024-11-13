            // Function to load the corresponding JavaScript file based on the selected radio button
            function loadScript(fileName) {
                var script = document.createElement('script');
                script.src = 'scripts/' + fileName + '.js';
                document.head.appendChild(script);
            }
        
            // Event listener for radio button changes
            document.querySelectorAll('input[name="GappsType"]').forEach(function (elem) {
                elem.addEventListener("change", function () {
                    if (this.value === 'NikGapps') {
                        loadScript('NikGApps');
                        document.getElementById("info").innerHTML += "<b>NikGApps Script Selected.</b> <br>";

                    } else if (this.value === 'MindTheGApps') {
                        loadScript('MindTheGApps');
                        document.getElementById("info").innerHTML += "<b>MindTheGApps Script Selected.</b> <br>";
                    }
                });
            });