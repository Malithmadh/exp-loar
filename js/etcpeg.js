$('#etcpeg-token').click(function () {
    etcTab = 'token';

    $('#peg-table tbody').html("");
    $('#etc-pagi').html("");
    $('#navE').html("");
    let element_id = '#peg-table';
    let api_url =
        "https://blockscout.com/etc/mainnet/api?module=account&action=txlist&address=0x9186ff77866DfD1007429F552e48C6d1A927297A"
    etcPegToken(api_url, element_id)
});

$('#etcpeg-rollup').click(function () {
    etcTab = 'rollup';
    $('#peg-table tbody').html("");
    $('#etc-pagi').html("");
    $('#navE').html("");
    let element_id = '#peg-table';
    let api_url =
        "https://blockscout.com/etc/mainnet/api?module=account&action=txlist&address=0x6f6ed4820E44128794D22eB0b8B5c035a8Eac4E6"
    etcPegRollup(api_url, element_id);
});
$('#etcpeg-lock').click(function () {
    etcTab = 'lock';
    console.log("Click Triggered");
    
    $('#peg-table tbody').html("");
    $('#etc-pagi').html("");
    $('#navE').html("");
    let element_id = '#peg-table';
    let api_url = "https://api.etherscan.io/api?module=account&action=tokentx&address=0x9186ff77866DfD1007429F552e48C6d1A927297A&startblock=0&endblock=99999999&sort=asc&apikey=9439IK1Y6D6UZFBN298YATMAAAXD3XSIVS"
    
    etcPegLock(api_url, element_id)
});

// etc peg token
function etcPegToken(api_url, element_id) {
    $.get(api_url,
        function (data) {
            if (data.status) {
                var html = ''
                $.each(data.result, function (index, value) {
                    const date = new Date(value.timeStamp * 1000);
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
                                +getBlock(value.blockNumber)+
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
                                    +getBlockNumber(value.blockNumber)+
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

                $('#peg-table').append(html);

            }
            pagiSecondE(data.result.length);
        });
}

// etc peg roll ups
function etcPegRollup(api_url, element_id) {
    
    $.get(api_url,
        function (data) {
            if (data.status) {
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
                                    '<td class="text-left">'
                                    +getRollupBlockNumber(value.blockNumber)+
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
                                    getRollupBlockNumber(value.blockNumber)+
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

                $('#peg-table tbody').append(html);
            }
            pagiSecondE(data.result.length);
        });
}

function etcPegLock(api_url, element_id) {
    
    $.get(api_url,
        function (data) {
            if (data.status) {
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
                                    getLockBlockNumber(value.blockNumber)+
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
                                    getLockBlockNumber(value.blockNumber)+
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

                $('#peg-table tbody').append(html);
            }
            pagiSecondE(data.result.length);
        });
}


function getBlockNumber(number){

    console.log("Get block reward")
    
    var block_number = number;
    var apiUrl = "https://blockscout.com/etc/mainnet/api?module=block&action=getblockreward&blockno="+number+"";
    
    var block_rewards = 0;
    
    $.ajax({
        url: apiUrl,
        type: "GET",
        async: true, // set to false so order of operations is correct
        data: {block_number : block_number},
        success: function(data){
        if(data.status){
            
            console.log("etcpeg" + data.result.blockReward);
            block_rewards = data.result.blockReward

            var num = parseFloat(block_rewards);
            block_rewards = num/1000000000000000000;
        }
        
        return block_rewards;
     }
   });
}


function getRollupBlockNumber(number){

    var block_number = number;
    var apiUrl = "https://blockscout.com/etc/mainnet/api?module=block&action=getblockreward&blockno="+number+"";
    
    var block_rewards = 0;
    
    $.ajax({
        url: apiUrl,
        type: "GET",
        async: true, // set to false so order of operations is correct
        data: {block_number : block_number},
        success: function(data){
        if(data.status){
            
            console.log("etcpeg" + data.result.blockReward);
            block_rewards = data.result.blockReward

            var num = parseFloat(block_rewards);
            block_rewards = num/1000000000000000000;
        }
        
        return block_rewards;
     }
   });
}


function getLockBlockNumber(number){

    var block_number = number;
    var apiUrl = "https://blockscout.com/etc/mainnet/api?module=block&action=getblockreward&blockno="+number+"";
    
    var block_rewards = 0;
    
    $.ajax({
        url: apiUrl,
        type: "GET",
        async: true, // set to false so order of operations is correct
        data: {block_number : block_number},
        success: function(data){
        if(data.status){
            
            console.log("etcpeg" + data.result.blockReward);
            block_rewards = data.result.blockReward

            var num = parseFloat(block_rewards);
            block_rewards = num/1000000000000000000;
        }
        
        return block_rewards;
     }
   });
}

function paginationE(rowcE){
   
    const rowsPerPageE = 26;
    const rowsE = $('#peg-table tr');
    const rowsCountE = rowcE;
    const pageCountE = Math.ceil(rowsCountE / rowsPerPageE); // avoid decimals
    const numbersE = $('#etc-pagi');

    // Generate the pagination.
    for (var i = 0; i < pageCountE; i++) {
        numbersE.append('<li class="page-item"><a href="#" class="page-link">' + (i + 1) + '</a></li>');
    }

    // Mark the first page link as active.
    $('#etc-pagi li:first-child a').addClass('active');

    // Display the first set of rows.
    displayRows(1);

    // On pagination click.
    $('#etc-pagi li a').click(function (e) {
        var $this = $(this);

        e.preventDefault();

        // Remove the active class from the links.
        $('#etc-pagi li a').removeClass('active');

        // Add the active class to the current link.
        $this.addClass('active');

        // Show the rows corresponding to the clicked page ID.
        displayRows($this.text());
    });

    // Function that displays rows for a specific page.
    function displayRows(index) {
        var start = (index - 1) * rowsPerPageE;
        var end = start + rowsPerPageE;

        // Hide all rows.
        rowsE.hide();

        // Show the proper rows for this page.
        rowsE.slice(start, end).show();
    }
 }


 function pagiSecondE(rowCountE){
    $(document).ready(function () {
        $('#peg-table').after('<div id="navE" style="width:800px; margin:0 auto;"></div>');
        var rowsShownE = 26;
        var numLimitE = 26;
        var rowsTotalE = rowCountE;
        var numPagesE = rowsTotalE / rowsShownE;
        for (var i = 0; i < numPagesE; i++) {
            var pageNumE = i + 1;
            $('#navE').append('<a class="btn numse bg" href="#" rel="' + i + '">' + pageNumE + '</a> ');
        }
        $('#peg-table tr').hide();
        $('#peg-table tr').slice(0, rowsShownE).show();
        $('#navE a:first').addClass('active').css("color", "blue");
        if (numPagesE > numLimitE) {
            $('#navE').append('<a class="btn bg" href="#" rel="next">Next</a> ');
            $('#navE').prepend('<a class="btn bg" href="#" rel="prev" style="display:none">Pre</a> ');
            $('#navE').append('<a class="btn bg" href="#" rel="last">Last</a> ');
            $('#navE').prepend('<a class="btn bg" href="#" rel="first" style="display:none">First</a> ');
        }
        $('#navE').on('click', 'a', function () {
            var $numsE = $('.numse');
            var currPageE = $(this).attr('rel');
            if (currPageE == "next") {
                currPageE = $('#navE a.active').attr('rel');
                currPageE++;
            } else if (currPageE == "prev") {
                currPageE = $('#navE a.active').attr('rel');
                currPageE--;
            }
            if (currPageE == "first") {
                $numsE.first().trigger('click');
                return false;
            } else if (currPageE == "last") {
                $numsE.last().trigger('click');
                return false;
            }
            var startItemE = currPageE * rowsShownE;
            var endItemE = startItemE + rowsShownE;
            $('#navE a').removeClass('active').css("color", "black");;
            $('#navE a[rel="' + currPageE + '"]').addClass('active').css("color", "blue");
            $('#peg-table tr').css('opacity', '0.0').hide().slice(startItemE, endItemE).
            css('display', 'table-row').animate({
                opacity: 1
            }, 300);
            if ($numsE.last().hasClass('active')) 
                $('#navE a[rel="next"]').hide();
            else 
                $('#navE a[rel="next"]').show();
            if (!$numsE.first().hasClass('active')) 
                $('#navE a[rel="prev"]').show();
            else 
                $('#navE a[rel="prev"]').hide();
            $numsE.hide();
            if(numLimitE < 1)
                numLimitE = 2;
            var $tempE = {};
            if ($numsE.filter('.active').is($numsE.first())){
                $('#navE a[rel="first"]').hide();
                $('#navE a[rel="last"]').show();
                $tempE = $numsE.first().show();
                for (var j = 0; j < numLimitE; j++) {
                    $tempE = $tempE.next().show();
                }
            }
            else if ($numsE.filter('.active').is($numsE.last())){
                $('#navE a[rel="last"]').hide();
                $('#navE a[rel="first"]').show();
                $tempE = $numsE.last().show();
                for (var j = 0; j < numLimit; j++) {
                    $tempE = $tempE.prev().show();
                }
            }
            else {
                $('#navE a[rel="first"]').show();
                $('#navE a[rel="last"]').show();
                $tempE = $('#navE a[rel="' + currPageE + '"]').show();
                for (var j = 0; j < numLimitE; j++) {
                    $tempE = $tempE.prev().show();
                }
                $tempE = $('#navE a[rel="' + currPageE + '"]').show();
                for (var j = 0; j < numLimitE; j++) {
                    $tempE = $tempE.next().show();
                }
            }
        }).find('a.active').trigger('click');
    });
 }
