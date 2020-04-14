const sessionStorage = {
    //记录页面数据状态到sessionStorage
    saveData(key,data){
        let data_str = JSON.stringify(data)
        window.sessionStorage[key] = data_str
    },
    //返回页面数据状态到
    getData(key){
        let data_str = window.sessionStorage[key]
        let data = JSON.parse(data_str || "{}")
        return data
    },
}
export default sessionStorage