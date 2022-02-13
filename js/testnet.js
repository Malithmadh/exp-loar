 // testnet token
 $('#testnet-token').click(function () {
    testNetTab = 'token';

     $('#test-token tbody').html("");
     $('#numbers').html("");
     $('#nav').html("");

     let element_id = '#test-token'
     
     let api_url =
         "https://api-ropsten.etherscan.io/api?module=account&action=txlist&address=0x5D0778eDE3867c69590FE611fCF8e233887CB655&startblock=0&endblock=99999999&sort=asc&apikey=9439IK1Y6D6UZFBN298YATMAAAXD3XSIVS"

     testNetToken(api_url, element_id);
 });

 // testnet rollups
 $('#testnet-rollup').click(function () {
    testNetTab = 'rollup';

     $('#test-token tbody').html("");
     $('#numbers').html("");
     $('#nav').html("");

     let element_id = '#test-token'
     let api_url = "https://api-ropsten.etherscan.io/api?module=account&action=txlistinternal&address=0xFa32465ddFC3628F8723fe7941F035a494bfbFf2&startblock=0&endblock=999999999&sort=asc&apikey=9439IK1Y6D6UZFBN298YATMAAAXD3XSIVS"

     rollup(api_url, element_id);
 });

 // testnet & mainnet 
 function testNetToken(api_url, element_id) {
    
     $.get(api_url,
        function (data) {
            if (data.status) {
                console.log(data.result+ "Data");
                var html = ''
                $.each(data.result, function (index, value) {
                    const date = new Date(value.timeStamp * 1000);

                if (searchToken != '') {
                    if (searchToken == value.hash.toString()) {
                        html += '<tr>'+
                                '<td class="text-left">'+
                                    +value.blockNumber+
                                '</td>'+
                                '<td class="text-left">'
                                    +value.hash.toString()+
                                '</td>'+
                                '<td class="text-left">'+
                                    +value.gasUsed+
                                '</td>'+
                                '<td class="text-left">'+
                                    '3.5 ETH'+
                                '</td>'+
                                '<td class="text-left">'
                                    +date.toLocaleTimeString()+
                                '</td>'+
                            '</tr>';
                    }
                } else {
                    html += '<tr>'+
                                '<td class="text-left">'+
                                    +value.blockNumber+
                                '</td>'+
                                '<td class="text-left">'
                                    +value.hash.toString()+
                                '</td>'+
                                '<td class="text-left">'+
                                    +value.gasUsed+
                                '</td>'+
                                '<td class="text-left">'+
                                    '3.5 ETH'+
                                '</td>'+
                                '<td class="text-left">'
                                    +date.toLocaleTimeString()+
                                '</td>'+
                            '</tr>';
                }
            });

            if (data.result.length == 0) {
                html = '<tr><td colspan="5">No records found!</td></tr>'
            } else if (html == '') {
                html = '<tr><td colspan="5">No records found!</td></tr>'
            }

                $('#test-token tbody').append(html);
            }
            pagiSecond(data.result.length)
        });
    }


 // roll ups // testnet & mainnet 
 function rollup(api_url, element_id) {

     $.get(api_url,
        function (data) {
            if (data.status) {
                var html = ''
                $.each(data.result, function (index, value) {
                    
                const date = new Date(value.timeStamp * 1000);
        
                if (searchToken != '') {
                    if (searchToken == value.hash.toString()) {
                        html += '<tr class="tr">'+
                                '<td class="text-left">'+
                                    +value.blockNumber+
                                '</td>'+
                                '<td class="text-left">'
                                    +value.hash.toString()+
                                '</td>'+
                                '<td class="text-left">'+
                                    +value.gasUsed+
                                '</td>'+
                                '<td class="text-left">'+
                                    '3.5 ETH'+
                                '</td>'+
                                '<td class="text-left">'
                                    +date.toLocaleTimeString()+
                                '</td>'+
                        '</tr>';
                    }
                } else {
                    html += '<tr class="tr">'+
                                '<td class="text-left">'+
                                    +value.blockNumber+
                                '</td>'+
                                '<td class="text-left">'
                                    +value.hash.toString()+
                                '</td>'+
                                '<td class="text-left">'+
                                    +value.gasUsed+
                                '</td>'+
                                '<td class="text-left">'+
                                    '3.5 ETH'+
                                '</td>'+
                                '<td class="text-left">'
                                    +date.toLocaleTimeString()+
                                '</td>'+
                        '</tr>';
                }
            });

            if (data.result.length == 0) {
                html = '<tr><td colspan="5">No records found!</td></tr>'
            } else if (html == '') {
                html = '<tr><td colspan="5">No records found!</td></tr>'
            }
                
                $('#test-token tbody').append(html);
            }
            pagiSecond(data.result.length)
        });
    }


 function pagination(rowc){
   
    const rowsPerPage = 3;
    const rows = $('#test-token tr');
    const rowsCount = 100;
    const pageCount = Math.ceil(rowsCount / rowsPerPage); // avoid decimals
    const numbers = $('#numbers');

    // Generate the pagination.
    for (var i = 0; i < pageCount; i++) {
        numbers.append('<li class="page-item"><a href="#" class="page-link">' + (i + 1) + '</a></li>');
    }

    // Mark the first page link as active.
    $('#numbers li:first-child a').addClass('active');

    // Display the first set of rows.
    displayRows(1);

    // On pagination click.
    $('#numbers li a').click(function (e) {
        var $this = $(this);

        e.preventDefault();

        // Remove the active class from the links.
        $('#numbers li a').removeClass('active');

        // Add the active class to the current link.
        $this.addClass('active');

        // Show the rows corresponding to the clicked page ID.
        displayRows($this.text());
    });

    // Function that displays rows for a specific page.
    function displayRows(index) {
        var start = (index - 1) * rowsPerPage;
        var end = start + rowsPerPage;

        // Hide all rows.
        rows.hide();

        // Show the proper rows for this page.
        rows.slice(start, end).show();
    }
 }

 function pagiSecond(rowCount){
    $(document).ready(function () {
        $('#test-token').after('<div id="nav" style="width:800px; margin:0 auto;"></div>');
        var rowsShown = 26;
        var numLimit = 26;
        var rowsTotal = rowCount;
        var numPages = rowsTotal / rowsShown;
        for (var i = 0; i < numPages; i++) {
            var pageNum = i + 1;
            $('#nav').append('<a class="btn nums bg" href="#" rel="' + i + '">' + pageNum + '</a> ');
        }
        $('#test-token tr').hide();
        $('#test-token tr').slice(0, rowsShown).show();
        $('#nav a:first').addClass('active').css("color", "blue");
        if (numPages > numLimit) {
            $('#nav').append('<a class="btn bg" href="#" rel="next">Next</a> ');
            $('#nav').prepend('<a class="btn bg" href="#" rel="prev" style="display:none">Pre</a> ');
            $('#nav').append('<a class="btn bg" href="#" rel="last">Last</a> ');
            $('#nav').prepend('<a class="btn bg" href="#" rel="first" style="display:none">First</a> ');
        }
        $('#nav').on('click', 'a', function () {
            var $nums = $('.nums');
            var currPage = $(this).attr('rel');
            if (currPage == "next") {
                currPage = $('#nav a.active').attr('rel');
                currPage++;
            } else if (currPage == "prev") {
                currPage = $('#nav a.active').attr('rel');
                currPage--;
            }
            if (currPage == "first") {
                $nums.first().trigger('click');
                return false;
            } else if (currPage == "last") {
                $nums.last().trigger('click');
                return false;
            }
            var startItem = currPage * rowsShown;
            var endItem = startItem + rowsShown;
            $('#nav a').removeClass('active').css("color", "black");;
            $('#nav a[rel="' + currPage + '"]').addClass('active').css("color", "blue");
            $('#test-token tr').css('opacity', '0.0').hide().slice(startItem, endItem).
            css('display', 'table-row').animate({
                opacity: 1
            }, 300);
            if ($nums.last().hasClass('active')) 
                $('#nav a[rel="next"]').hide();
            else 
                $('#nav a[rel="next"]').show();
            if (!$nums.first().hasClass('active')) 
                $('#nav a[rel="prev"]').show();
            else 
                $('#nav a[rel="prev"]').hide();
            $nums.hide();
            if(numLimit < 1)
                numLimit = 2;
            var $temp = {};
            if ($nums.filter('.active').is($nums.first())){
                $('#nav a[rel="first"]').hide();
                $('#nav a[rel="last"]').show();
                $temp = $nums.first().show();
                for (var j = 0; j < numLimit; j++) {
                    $temp = $temp.next().show();
                }
            }
            else if ($nums.filter('.active').is($nums.last())){
                $('#nav a[rel="last"]').hide();
                $('#nav a[rel="first"]').show();
                $temp = $nums.last().show();
                for (var j = 0; j < numLimit; j++) {
                    $temp = $temp.prev().show();
                }
            }
            else {
                $('#nav a[rel="first"]').show();
                $('#nav a[rel="last"]').show();
                $temp = $('#nav a[rel="' + currPage + '"]').show();
                for (var j = 0; j < numLimit; j++) {
                    $temp = $temp.prev().show();
                }
                $temp = $('#nav a[rel="' + currPage + '"]').show();
                for (var j = 0; j < numLimit; j++) {
                    $temp = $temp.next().show();
                }
            }
        }).find('a.active').trigger('click');
    });
 }