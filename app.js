const express = require('express');
const app = express();

// 处理支付状态查询
app.get('/api/check-order-status', async (req, res) => { 