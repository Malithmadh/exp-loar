// mainnet rollups
$('#mainnet-token').click(function () {
    mainNetTab = 'token';
    $('#main-table tbody').html("");
    $('#mainnet-pagi').html("");
    $('#navm').html("");

    let element_id = '#main-table';
    let api_url = "https://api.etherscan.io/api?module=account&action=txlist&address=0x1da4858ad385cc377165a298cc2ce3fce0c5fd31&startblock=0&endblock=99999999&sort=asc&apikey=9439IK1Y6D6UZFBN298YATMAAAXD3XSIVS"

    mainNetToken(api_url, element_id)
});

// mainnet rolls ups
$('#mainnet-rollup').click(function () {
    mainNetTab = 'rollup';
    console.log("Click Triggered");
    
    $('#main-table tbody').html("");
    $('#mainnet-pagi').html("");
    $('#navm').html("");
    
    let element_id = '#main-table';
    let api_url = "https://api.etherscan.io/api?module=account&action=txlist&address=0x2C7716BDf98e181df4CF1b40aD7648A40EE813b9&startblock=0&endblock=99999999&sort=asc&apikey=9439IK1Y6D6UZFBN298YATMAAAXD3XSIVS"
    
    mainNetRollup(api_url, element_id)
});

// mainnet 
function mainNetToken(api_url, element_id) {
    var blockRewardMainnetToken = 0;
    console.log('Search Term', searchToken);
    
    $.get(api_url,
        function (data) {
            if (data.status) {

                var html = ''
                var block_rewards = 0;
                console.log(block_rewards);
                $.each(data.result, function (index, value) {
                    const date = new Date(value.timeStamp * 1000);
                    var apiUrl = "https://api.etherscan.io/api?module=block&action=getblockreward&blockno="+value.blockNumber+"&apikey=9439IK1Y6D6UZFBN298YATMAAAXD3XSIVS";
                    blockRewardMainnetToken = 0;
                    
                    $.ajax({
                        url: apiUrl,
                        type: "GET",
                        async: false, // set to false so order of operations is correct
                        data: {block_number : value.blockNumber},
                        success: function(data){
                        if(data.status){
                            
                            var block_rewards = data.result.blockReward
                
                            var num = parseFloat(block_rewards);
                            blockRewardMainnetToken = num/1000000000000000000;
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
                                    +blockRewardMainnetToken+
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
                                    +blockRewardMainnetToken+
                                    '</td>'+
                                    '<td class="text-left block-reward">'
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

                $('#main-table').append(html);
            }

            pagiSecondM(data.result.length)
        });
}


// roll ups // mainnet 
function mainNetRollup(api_url, element_id) {
    var blockRewardMainnetRollup = 0;
    
    $.get(api_url,
        function (data) {
            if (data.status) {
                var html = ''
                $.each(data.result, function (index, value) {
                    const date = new Date(value.timeStamp * 1000);
                    var apiUrl = "https://api.etherscan.io/api?module=block&action=getblockreward&blockno="+value.blockNumber+"&apikey=9439IK1Y6D6UZFBN298YATMAAAXD3XSIVS";
                    blockRewardMainnetRollup = 0;
                    
                    $.ajax({
                        url: apiUrl,
                        type: "GET",
                        async: false, // set to false so order of operations is correct
                        data: {block_number : value.blockNumber},
                        success: function(data){
                        if(data.status){
                            
                            var block_rewards = data.result.blockReward
                
                            var num = parseFloat(block_rewards);
                            blockRewardMainnetRollup = num/1000000000000000000;
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
                                    +blockRewardMainnetRollup+
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
                                    +blockRewardMainnetRollup+
                                    '</td>'+
                                    '<td class="text-left">'
                                        +date.toLocaleTimeString()+
                                    '</td>'+
                            '</tr>';
                    }

                });

                if (data.result.length == 0) {
                    html = '<tr><td colspan="5">No records found!</td></tr>'
                }

                $('#main-table tbody').html(html);

            }
            pagiSecondM(data.result.length)
    });
}


function getBlock(number){

    console.log("Get block reward")
    
    var block_number = number;
    var apiUrl = "https://api.etherscan.io/api?module=block&action=getblockreward&blockno="+number+"&apikey=9439IK1Y6D6UZFBN298YATMAAAXD3XSIVS";
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


function paginationM(mainrow){

    const rowsPerPageM = 26;
    const rowsM = $('#main-table tr');
    const rowsCountM = mainrow;
    const pageCountM = Math.ceil(rowsCountM / rowsPerPageM); // avoid decimals
    const numbersM = $('#mainnet-pagi');

    // Generate the pagination.
    for (var i = 0; i < pageCountM; i++) {
        numbersM.append('<li class="page-item"><a href="#" class="page-link">' + (i + 1) + '</a></li>');
    }

    // Mark the first page link as active.
    $('#mainnet-pagi li:first-child a').addClass('active');

    // Display the first set of rows.
    displayRows(1);

    // On pagination click.
    $('#mainnet-pagi li a').click(function (e) {
        var $this = $(this);

        e.preventDefault();

        // Remove the active class from the links.
        $('#mainnet-pagi li a').removeClass('active');

        // Add the active class to the current link.
        $this.addClass('active');

        // Show the rows corresponding to the clicked page ID.
        displayRows($this.text());
    });

    // Function that displays rows for a specific page.
    function displayRows(index) {
        var start = (index - 1) * rowsPerPageM;
        var end = start + rowsPerPageM;

        // Hide all rows.
        rowsM.hide();

        // Show the proper rows for this page.
        rowsM.slice(start, end).show();
    }
 }


 function pagiSecondM(rowCountM){
    $('#main-table').after('<div id="navm" style="width:800px; margin:0 auto;"></div>');
        var rowsShownM = 26;
        var numLimitM = 26;
        var rowsTotalM = rowCountM;
        var numPagesM = Math.ceil(rowsTotalM / rowsShownM);
        
        for (var i = 0; i < numPagesM; i++) {
            var pageNumM = i + 1;
            $('#navm').append('<a class="btn numsm bg" href="#" rel="' + i + '">' + pageNumM + '</a> ');
        }

        $('#main-table tr').hide();
        $('#main-table tr').slice(0, rowsShownM).show();
        $('#navm a:first').addClass('active').css("color", "blue");

        if (numPagesM > numLimitM) {
            $('#navm').append('<a class="btn bg" href="#" rel="next">Next</a> ');
            $('#navm').prepend('<a class="btn bg" href="#" rel="prev" style="display:none">Pre</a> ');
            $('#navm').append('<a class="btn bg" href="#" rel="last">Last</a> ');
            $('#navm').prepend('<a class="btn bg" href="#" rel="first" style="display:none">First</a> ');

        }
        $('#navm').on('click', 'a', function () {
            var $numsM = $('.numsm');
            var currPageM = $(this).attr('rel');
            if (currPageM == "next") {
                currPageM = $('#navm a.active').attr('rel');
                currPageM++;
            } else if (currPageM == "prev") {
                currPageM = $('#navm a.active').attr('rel');
                currPageM--;
            }
            if (currPageM == "first") {
                $numsM.first().trigger('click');
                return false;
            } else if (currPageM == "last") {
                $numsM.last().trigger('click');
                return false;
            }
            var startItemM = currPageM * rowsShownM;
            var endItemM = startItemM + rowsShownM;
            $('#navm a').removeClass('active').css("color", "black");;
            $('#navm a[rel="' + currPageM + '"]').addClass('active').css("color", "blue");
            $('#main-table tr').css('opacity', '0.0').hide().slice(startItemM, endItemM).
            css('display', 'table-row').animate({
                opacity: 1
            }, 300);
            if ($numsM.last().hasClass('active')) 
                $('#navm a[rel="next"]').hide();
            else 
                $('#navm a[rel="next"]').show();
            if (!$numsM.first().hasClass('active')) 
                $('#navm a[rel="prev"]').show();
            else 
                $('#navm a[rel="prev"]').hide();
            $numsM.hide();
            if(numLimitM < 1)
                numLimitM = 2;
            var $tempM = {};
            if ($numsM.filter('.active').is($numsM.first())){
                $('#navm a[rel="first"]').hide();
                $('#navm a[rel="last"]').show();
                $tempM = $numsM.first().show();
                for (var j = 0; j < numLimitM; j++) {
                    $tempM = $tempM.next().show();
                }
            }
            else if ($numsM.filter('.active').is($numsM.last())){
                $('#navm a[rel="last"]').hide();
                $('#navm a[rel="first"]').show();
                $tempM = $numsM.last().show();
                for (var j = 0; j < numLimitM; j++) {
                    $tempM = $tempM.prev().show();
                }
            }
            else {
                $('#navm a[rel="first"]').show();
                $('#navm a[rel="last"]').show();
                $tempM = $('#navm a[rel="' + currPageM + '"]').show();
                for (var j = 0; j < numLimitM; j++) {
                    $tempM = $tempM.prev().show();
                }
                $tempM = $('#navm a[rel="' + currPageM + '"]').show();
                for (var j = 0; j < numLimitM; j++) {
                    $tempM = $tempM.next().show();
                }
            }
        }).find('a.active').trigger('click');
 }
