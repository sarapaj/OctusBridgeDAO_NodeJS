const express = require('express')
const axios = require('axios')
const bodyParser = require('body-parser')

const port = 3000

const apiUrl = 'https://dao.octusbridge.io/v1'
const testUrl = 'https://dao-test.octusbridge.io/v1'

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

  //#region proposals

  // Get proposals overview.
  app.get('/proposals/overview', (req, res) => { 
    axios({
        method: 'get',
        url: `${apiUrl}/proposals/overview`
      })
    .then(function (response) {
        res.send(response.data)
    })
    .catch(function(error){
        console.error(error)
        res.send('Error')
    })
})

// Get proposals data
app.post('/proposals/search', (req, res) => {

    console.log(req.body)
    axios({
        method: 'post',
        url: `${apiUrl}/proposals/search`,
        data: {
            endTimeGe: req.body.endTimeGe,
            endTimeLe: req.body.endTimeLe,
            limit: req.body.limit,
            offset: req.body.offset,
            ordering: req.body.ordering,
            proposalAddress: req.body.proposalAddress,
            proposalId: req.body.proposalId,
            proposer: req.body.proposer,
            startTimeGe: req.body.startTimeGe,
            startTimeLe: req.body.startTimeLe,
            state: req.body.state
        }
    })
    .then(function(response){
        res.send(response.data)
    })
    .catch(function(error){
        console.error(error)
        res.send('Error')
    })
})

//#endregion

//#region voters

// Get proposals with votes data.
app.post('/voters/:voter/search', (req, res) => {

    axios({
        method: 'post',
        url: `${apiUrl}/voters/${req.params.voter}/search`,
        data: {
            availableForUnlock: req.body.availableForUnlock,
            endTimeGe: req.body.endTimeGe,
            endTimeLe: req.body.endTimeLe,
            limit: req.body.limit,
            locked: req.body.locked,
            offset: req.body.offset,
            ordering: req.body.ordering,
            proposalAddress: req.body.proposalAddress,
            proposalId: req.body.proposalId,
            proposer: req.body.proposer,
            startTimeGe: req.body.startTimeGe,
            startTimeLe: req.body.startTimeLe,
            state: req.body.state,
            support: req.body.support
        }
    })
    .then(function(response){
        res.send(response.data)
    })
    .catch(function(error){
        console.error(error)
        res.send('Error')
    })
  })

// Get proposals counts
app.post('/voters/proposals/count', (req, res) => {

    axios({
        method: 'post',
        url: `${apiUrl}/voters/proposals/count`,
        data: {
            voters: req.body.voters
        }
    })
    .then(function(response){
        res.send(response.data)
    })
    .catch(function(error){
        console.error(error)
        res.send('Error')
    })
  })

// Get proposals counts
app.post('/voters/proposals/count/search', (req, res) => {

    axios({
        method: 'post',
        url: `${apiUrl}/voters/proposals/count/search`,
        data: {
            limit: req.body.limit,
            offset: req.body.offset,
            ordering: req.body.ordering,
            voters: req.body.voters
        }
    })
    .then(function(response){
        res.send(response.data)
    })
    .catch(function(error){
        console.error(error)
        res.send('Error')
    })
  })
//#endregion

//#region votes

// Get votes data.
app.post('/votes/search', (req, res) => {

    axios({
        method: 'post',
        url: `${apiUrl}/votes/search`,
        data: {
            limit: req.body.limit,
            locked: req.body.locked,
            offset: req.body.offset,
            ordering: req.body.ordering,
            proposalId: req.body.proposalId,
            support: req.body.support,
            voter: req.body.voter
        }
    })
    .then(function(response){
        res.send(response.data)
    })
    .catch(function(error){
        console.error(error)
        res.send('Error')
    })
  })

//#endregion