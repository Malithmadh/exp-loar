// bnbpeg click event
$('#bnbpeg-token').click(function () {
    bnbTab = 'token';

    $('#bnb-table tbody').html("");
    $('#bnb-pagi').html("");
    $('#navb').html("");
    let element_id = '#bnb-table';
    // let token = "TH6XW2FQY1I8CDFWVD6YD9XCRYHYTUQ9BD";
    let api_url = "https://api.bscscan.com/api?module=account&action=txlist&address=0x3e3B357061103DC040759aC7DceEaba9901043aD&startblock=1&endblock=99999999&sort=asc&apikey=TH6XW2FQY1I8CDFWVD6YD9XCRYHYTUQ9BD"

    bnbPegToken(api_url, element_id);

});


$('#bnbpeg-rollup').click(function () {
    bnbTab = 'rollup';

    $('#bnb-table tbody').html("");
    $('#bnb-pagi').html("");
    $('#navb').html("");
    let element_id = '#bnb-table';
    // let token = "TH6XW2FQY1I8CDFWVD6YD9XCRYHYTUQ9BD"
    let api_url = "https://api.bscscan.com/api?module=account&action=txlist&address=0xABa46894aCaB62A47Ff28c0a69e6333B80425dA5&startblock=1&endblock=99999999&sort=asc&apikey=TH6XW2FQY1I8CDFWVD6YD9XCRYHYTUQ9BD"

    bnbPegRollup(api_url, element_id);
});

$('#bnbpeg-lock').click(function () {
    bnbTab = 'lock';

    $('#bnb-table tbody').html("");
    $('#bnb-pagi').html("");
    $('#navb').html("");
    let element_id = '#bnb-table';
    let api_url = "https://api.etherscan.io/api?module=account&action=tokentx&address=0x3e3B357061103DC040759aC7DceEaba9901043aD&startblock=0&endblock=99999999&sort=asc&apikey=9439IK1Y6D6UZFBN298YATMAAAXD3XSIVS"
    bnbPegLock(api_url, element_id);
});

function bnbPegToken(api_url, element_id) {
    var bnbpegTok = 0;
    $.get(api_url,
        function (data) {
            if (data.status) {
                var html = ''
                $.each(data.result, function (index, value) {
                    const date = new Date(value.timeStamp * 1000);
                    
                    var apiUrl = "https://api.bscscan.com/api?module=block&action=getblockreward&blockno="+value.blockNumber+"&apikey=9439IK1Y6D6UZFBN298YATMAAAXD3XSIVS";
                    bnbpegTok = 0;
                    
                    $.ajax({
                        url: apiUrl,
                        type: "GET",
                        async: true, // set to false so order of operations is correct
                        data: {block_number : value.blockNumber},
                        success: function(data){
                        if(data.status){
                    
                            var block_rewards = data.result.blockReward
                
                            var num = parseFloat(block_rewards);
                            bnbpegTok =  num/1000000000000000000;
                            bnbpegTok = bnbpegTok.toFixed(2);
                        }
                     }
                   });
                    if (searchToken != '') {
                        if (searchToken == value.hash.toString()) {
                            html += '<tr>'+
                                '<td class="text-left">'
                                    +value.blockNumber+
                                '</td>'+
                                '<td class="text-left">'
                                    +value.hash.toString()+
                                '</td>'+
                                '<td class="text-left">'
                                    +value.gasUsed+
                                '</td>'+
                                '<td class="text-left">'
                                +bnbpegTok+'BNB'+
                                '</td>'+
                                '<td class="text-left">'
                                    +date.toLocaleTimeString()+
                                '</td>'+
                            '</tr>';
                        }
                    } else {
                        html += '<tr>'+
                                    '<td class="text-left">'
                                        +value.blockNumber+
                                    '</td>'+
                                    '<td class="text-left">'
                                        +value.hash.toString()+
                                    '</td>'+
                                    '<td class="text-left">'
                                        +value.gasUsed+
                                    '</td>'+
                                    '<td class="text-left">'
                                    +bnbpegTok+'BNB'+
                                    '</td>'+
                                    '<td class="text-left">'
                                        +date.toLocaleTimeString()+
                                    '</td>'+
                                '</tr>';
                    }

                });

                if (data.result.length == 0) {
                    html = '<div style="color: #8A8DBA !important;">No records found!</div>'
                } else if (html == '') {
                    html = '<div style="color: #8A8DBA !important;">No records found!</div>'
                }

                $('#bnb-table').append(html);
                
            }
            pagiSecondB(data.result.length);
        });
}


function bnbPegRollup(api_url, element_id) {
    var bnbpegroll = 0;
    $.get(api_url,
        function (data) {
            if (data.status) {
                var html = ''
                $.each(data.result, function (index, value) {
                    const date = new Date(value.timeStamp * 1000);
                    
                    var apiUrl = "https://api.bscscan.com/api?module=block&action=getblockreward&blockno="+value.blockNumber+"&apikey=9439IK1Y6D6UZFBN298YATMAAAXD3XSIVS";
                    bnbpegroll = 0;
                    
                    $.ajax({
                        url: apiUrl,
                        type: "GET",
                        async: true, // set to false so order of operations is correct
                        data: {block_number : value.blockNumber},
                        success: function(data){
                        if(data.status){
                    
                            var block_rewards = data.result.blockReward
                
                            var num = parseFloat(block_rewards);
                            bnbpegroll =  num/1000000000000000000;
                            bnbpegroll = bnbpegroll.toFixed(2);
                        }
                     }
                   });
                   
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
                                    '<td class="text-left">'
                                    +bnbpegroll+'BNB'+
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
                                    '<td class="text-left">'
                                    +bnbpegroll+'BNB'+
                                    '</td>'+
                                    '<td class="text-left">'
                                        +date.toLocaleTimeString()+
                                    '</td>'+
                            '</tr>';
                    }

                });

                if (data.result.length == 0) {
                    html = '<div style="color: #8A8DBA !important;">No records found!</div>'
                } else if (html == '') {
                    html = '<div style="color: #8A8DBA !important;">No records found!</div>'
                }

                $('#bnb-table tbody').append(html);
            }
            pagiSecondB(data.result.length);
        });
}

function bnbPegLock(api_url, element_id) {
    var bnbPegL = 0;
    $.get(api_url,
        function (data) {
            if (data.status) {
                var html = ''
                $.each(data.result, function (index, value) {
                    const date = new Date(value.timeStamp * 1000);
                    var apiUrl = "https://api.bscscan.com/api?module=block&action=getblockreward&blockno="+value.blockNumber+"&apikey=9439IK1Y6D6UZFBN298YATMAAAXD3XSIVS";
                    bnbPegL = 0;
                    
                    $.ajax({
                        url: apiUrl,
                        type: "GET",
                        async: true, // set to false so order of operations is correct
                        data: {block_number : value.blockNumber},
                        success: function(data){
                        if(data.status){
                            console.log("data"+"block_number"+block_number+" "+data.result.blockReward);
                            var block_rewards = data.result.blockReward
                
                            var num = parseFloat(block_rewards);
                            bnbPegL =  num/1000000000000000000;
                            bnbPegL = bnbPegL.toFixed(2);
                        }
                     }
                   });
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
                                    '<td class="text-left">'
                                    +bnbPegL+'BNB'+
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
                                    '<td class="text-left">'
                                    +bnbPegL+'BNB'+
                                    '</td>'+
                                    '<td class="text-left">'
                                        +date.toLocaleTimeString()+
                                    '</td>'+
                            '</tr>';
                    }

                });

                if (data.result.length == 0) {
                    html = '<div style="color: #8A8DBA !important;">No records found!</div>'
                } else if (html == '') {
                    html = '<div style="color: #8A8DBA !important;">No records found!</div>'
                }

                $('#bnb-table tbody').append(html);
            }
            pagiSecondB(data.result.length);
        });
}


function getBlockPegTokenNumber(number){

        //alert(number);
        
        var block_number = number;
        var apiUrl = "https://api.bscscan.com/api?module=block&action=getblockreward&blockno="+number+"&apikey=9439IK1Y6D6UZFBN298YATMAAAXD3XSIVS";
        var block_rewards = 0;
        
        $.ajax({
            url: apiUrl,
            type: "GET",
            async: true, // set to false so order of operations is correct
            data: {block_number : block_number},
            success: function(data){
            if(data.status){
                console.log("data"+"block_number"+block_number+" "+data.result.blockReward);
                block_rewards = data.result.blockReward
    
                var num = parseFloat(block_rewards);
                return num/1000000000000000000;
            }
         }
       });
}

function getBlockPegRollNumber(number){

    console.log("Get block reward")
        
        var block_number = number;
        var apiUrl = "https://api.bscscan.com/api?module=block&action=getblockreward&blockno="+number+"&apikey=9439IK1Y6D6UZFBN298YATMAAAXD3XSIVS";
        var block_rewards = 0;
        
        $.ajax({
            url: apiUrl,
            type: "GET",
            async: true, // set to false so order of operations is correct
            data: {block_number : block_number},
            success: function(data){
            if(data.status){
                console.log("data"+"block_number"+block_number+" "+data.result.blockReward);
                block_rewards = data.result.blockReward
    
                var num = parseFloat(block_rewards);
                return num/1000000000000000000;
            }
         }
       });
}

function getBlockPegLockNumber(number){

    console.log("Get block reward")
        
        var block_number = number;
        var apiUrl = "https://api.bscscan.com/api?module=block&action=getblockreward&blockno="+number+"&apikey=9439IK1Y6D6UZFBN298YATMAAAXD3XSIVS";
        var block_rewards = 0;
        
        $.ajax({
            url: apiUrl,
            type: "GET",
            async: true, // set to false so order of operations is correct
            data: {block_number : block_number},
            success: function(data){
            if(data.status){
                console.log("data"+"block_number"+block_number+" "+data.result.blockReward);
                block_rewards = data.result.blockReward
    
                var num = parseFloat(block_rewards);
                return num/1000000000000000000;
            }
         }
       });
}


function paginationB(rowcB){
   
    const rowsPerPageB = 26;
    const rowsB = $('#bnb-table tr');
    const rowsCountB = rowcB;
    const pageCountB = Math.ceil(rowsCountB / rowsPerPageB); // avoid decimals
    const numbersB = $('#bnb-pagi');

    // Generate the pagination.
    for (var i = 0; i < pageCountB; i++) {
        numbersB.append('<li class="page-item"><a href="#" class="page-link">' + (i + 1) + '</a></li>');
    }

    // Mark the first page link as active.
    $('#bnb-pagi li:first-child a').addClass('active');

    // Display the first set of rows.
    displayRows(1);

    // On pagination click.
    $('#bnb-pagi li a').click(function (e) {
        var $this = $(this);

        e.preventDefault();

        // Remove the active class from the links.
        $('#bnb-pagi li a').removeClass('active');

        // Add the active class to the current link.
        $this.addClass('active');

        // Show the rows corresponding to the clicked page ID.
        displayRows($this.text());
    });

    // Function that displays rows for a specific page.
    function displayRows(index) {
        var start = (index - 1) * rowsPerPageB;
        var end = start + rowsPerPageB;

        // Hide all rows.
        rowsB.hide();

        // Show the proper rows for this page.
        rowsB.slice(start, end).show();
    }
 }


 function pagiSecondB(rowCountB){
    $(document).ready(function () {
        $('#bnb-table').after('<div id="navb" style="width:800px; margin:0 auto;"></div>');
        var rowsShownB = 26;
        var numLimitB = 26;
        var rowsTotalB = rowCountB;
        var numPagesB = rowsTotalB / rowsShownB;
        for (var i = 0; i < numPagesB; i++) {
            var pageNumB = i + 1;
            $('#navb').append('<a class="btn numsb bg" href="#" rel="' + i + '">' + pageNumB + '</a> ');
        }
        $('#bnb-table tr').hide();
        $('#bnb-table tr').slice(0, rowsShownB).show();
        $('#navb a:first').addClass('active').css("color", "blue");
        if (numPagesB > numLimitB) {
            $('#navb').append('<a class="btn bg" href="#" rel="next">Next</a> ');
            $('#navb').prepend('<a class="btn bg" href="#" rel="prev" style="display:none">Pre</a> ');
            $('#navb').append('<a class="btn bg" href="#" rel="last">Last</a> ');
            $('#navb').prepend('<a class="btn bg" href="#" rel="first" style="display:none">First</a> ');
        }
        $('#navb').on('click', 'a', function () {
            var $numsB = $('.numsb');
            var currPageB = $(this).attr('rel');
            if (currPageB == "next") {
                currPageB = $('#navb a.active').attr('rel');
                currPageB++;
            } else if (currPageB == "prev") {
                currPageB = $('#navb a.active').attr('rel');
                currPageB--;
            }
            if (currPageB == "first") {
                $numsB.first().trigger('click');
                return false;
            } else if (currPageB == "last") {
                $numsB.last().trigger('click');
                return false;
            }
            var startItemB = currPageB * rowsShownB;
            var endItemB = startItemB + rowsShownB;
            $('#navb a').removeClass('active').css("color", "black");;
            $('#navb a[rel="' + currPageB + '"]').addClass('active').css("color", "blue");
            $('#bnb-table tr').css('opacity', '0.0').hide().slice(startItemB, endItemB).
            css('display', 'table-row').animate({
                opacity: 1
            }, 300);
            if ($numsB.last().hasClass('active')) 
                $('#navb a[rel="next"]').hide();
            else 
                $('#navb a[rel="next"]').show();
            if (!$numsB.first().hasClass('active')) 
                $('#navb a[rel="prev"]').show();
            else 
                $('#navb a[rel="prev"]').hide();
            $numsB.hide();
            if(numLimitB < 1)
                numLimitB = 2;
            var $tempB = {};
            if ($numsB.filter('.active').is($numsB.first())){
                $('#navb a[rel="first"]').hide();
                $('#navb a[rel="last"]').show();
                $tempB = $numsB.first().show();
                for (var j = 0; j < numLimitB; j++) {
                    $tempB = $tempB.next().show();
                }
            }
            else if ($numsB.filter('.active').is($numsB.last())){
                $('#navb a[rel="last"]').hide();
                $('#navb a[rel="first"]').show();
                $tempB = $numsB.last().show();
                for (var j = 0; j < numLimitB; j++) {
                    $tempB = $tempB.prev().show();
                }
            }
            else {
                $('#navb a[rel="first"]').show();
                $('#navb a[rel="last"]').show();
                $tempB = $('#navb a[rel="' + currPageB + '"]').show();
                for (var j = 0; j < numLimitB; j++) {
                    $tempB = $tempB.prev().show();
                }
                $tempB = $('#navb a[rel="' + currPageB + '"]').show();
                for (var j = 0; j < numLimitB; j++) {
                    $tempB = $tempB.next().show();
                }
            }
        }).find('a.active').trigger('click');
    });
 }

//  function getBlock(number){
    
//     var block_number = number;
//     var apiUrl = "https://api.bscscan.com/api?module=block&action=getblockreward&blockno="+number+"&apikey=TH6XW2FQY1I8CDFWVD6YD9XCRYHYTUQ9BD";
//     var block_rewards = 0;
    
//     $.ajax({
//         url: apiUrl,
//         type: "POST",
//         async: false, // set to false so order of operations is correct
//         data: {block_number : block_number},
//         success: function(data){
//         if(data.status){
//             block_rewards = data.result.blockReward
//         }
//      }
//    });
    
//      var num = parseFloat(block_rewards);
//      return num/1000000000000000000;
// }
