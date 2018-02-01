function queryString(query) {
    let value = '';
    const queryStr = this.props.location.search.split('?')[1];
    const queryArr = queryStr.split('&');
    queryArr.some(ele => {
        if(ele.split('=')[0] === query) {
            value = ele.split('=')[1];
        }
    });
   return value;
}

export default queryString;