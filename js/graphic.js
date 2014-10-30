//Change only the below two variables. Add dataTable options to the DataTable call 

//enter google sheets key here

var key = "1APSjHWL_Go9IUp_X1blZq1iwRFQGagNgkqoJBcmT_qE";

//"data" refers to the column name with no spaces and no capitals
//"title" is the column name as it appears in the published piece
//
var columns = [ 
    { "data": "county", "title": "County*" },
    // { "data": "year2008", "title": "2008" },
    // { "data": "year2009", "title": "2009" },
    { "data": "year2010", "title": "2011" },
    { "data": "year2011", "title": "2012" },
    { "data": "year2012", "title": "2013" },
    { "data": "year2013", "title": "2014" },
    { "data": "average", "title": "Average (2009-2014)" }
    ];

$(document).ready(function() {

    function initializeTabletopObject(){
    Tabletop.init({
        key: key,
        callback: function(data, tabletop) { 
            writeTable(data); //call up datatables function
            }, 
        simpleSheet: true,
        debug: false
    });
}

    initializeTabletopObject();

    function writeTable(data){
        //select main div and put a table there
        $('#graphic').html('<table cellpadding="0" cellspacing="0" border="0" class="display table table-bordered table-striped" id="mySelection"></table>');

        //initilize the DataTable object and put settings in
        //
        $("#mySelection").DataTable({
            "data": data, //var where data is
            "columns": columns, //call up column object
            "order":[[5, "desc"]], //order on 3rd column
            "pagingType": "simple" //no page numbers
            });
        }
});
//end of writeTable



