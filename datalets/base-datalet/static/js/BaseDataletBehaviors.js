/*
    The MIT License (MIT)

    Copyright (c) 2015 ROUTE-TO-PA CONSORTIUM

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.
*/

var BaseDataletBehavior ={

    properties: {

        /**
         * It represent the data url from CKAN api
         *
         * @attribute dataUrl
         * @type string
         * @default 'null'
         */
        dataUrl: {
            type: String,
            value: ""
        },

        /**
         * It represents one or multiple fields selected by user
         *
         * @attribute fields
         * @type Array
         * @default empty
         */
        fields: {
            type: String,
            value: ""
        },

        /**
         * The selected and transformed data you can use in presentation phase
         *
         * @attribute data
         * @type Array
         * @default empty
         */
        data: {
            type: Array,
            value: []
        }

    },

    factoryImpl: function(data_url, fields) {
        this.data_url = data_url;
        this.fields   = fields;
    }

};

var WorkcycleBehavior = {

    _component: null,
    /**
     * Request data from source(e.g. CKAN by api) using some kind of technology(e.g. Ajax)
     *
     * @method requestData
     */
    requestData: function(){
    },

    /**
     * Select the fields from data(typically json) previously retrieved by ajax request. The selection could be done by jsonPath but
     * it depends on the representation data format(CKAN apies return a json representation of the dataset).
     *
     * @method selectData
     */
    selectData: function(){
    },

    /**
     * Filter data previously selected. An example of filterting could be an expression such "fields > 30" or "fields = 'AAA'"
     * If you are using jsonPath to select the datas you can apply an expression directly in the jsonPath query string.
     *
     * @method filterData
     */
    filterData: function(){
    },

    /**
     * Transform the selected data in order to build the structure that the presentation phase needs.
     *
     * @method transformData
     */
    transformData: function(){
    },

    /**
     * Build the object/s for presentation layer.
     *
     * @method presentData
     */
    presentData: function(){

    },

    /**
     * Called when iron-ajax component receive the json data from called url. It is responsible to
     * extract data from response, coded in json, and refine it by using JsonPath queries in the query attribute.
     * After this phase it parses the resulting object to populate the structure(keys,values) to fill the final table by using
     * angularJs syntax.
     *
     * @method handleResponse
     */
    runWorkcycle: function() {
        this.selectData();
        this.filterData();
        this.transformData();
        this.presentData();
    },

    init: function(component){
        this._component = component;
        this.requestData();
    }

};