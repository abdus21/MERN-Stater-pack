import axios from 'axios';

const sendSms = async (to,text)=>{
   await axios.post(`https://bulksmsbd.net/api/smsapi?api_key=dFmIZXJIPp1QC3kiHss1&type=text&number=${to}&senderid=8809612443880&message=${text}`)
}

export default sendSms