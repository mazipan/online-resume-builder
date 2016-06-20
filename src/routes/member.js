/**
 * Created by irfan.maulana on 11/24/2015.
 */
var express = require('express');
var MemberModel = require('../model/member');
var crypto = require('crypto');

function hashMD5(stringWillEncode){
    var hash = crypto.createHash('md5').update(stringWillEncode).digest('hex');
    return hash;
};

var router = express.Router();

router.route('/')
    // INSERT DATA
    .post(function (req, res){
        var member;
        var errorMessage = "";
        if(typeof req !== 'undefined'){
            if(!req.body.username || !req.body.email || !req.body.password){
                errorMessage = "Mandatory field can not be blank !";
                return res.send({result : false, errorDesc : errorMessage});
            }else{
                var passHash = hashMD5(req.body.password);

                member = new MemberModel({
                    username: req.body.username,
                    email: req.body.email,
                    password: passHash,
                    created: new Date()
                });

                member.save(function (err) {
                    if (!err) {
                        console.log("member : "+ member.email + " has been created ");
                        member.password = "";
                        return res.send({result : true, member : member});
                    } else {
                        console.log(err);
                        return res.send({result : false, errorDesc : err});
                    }
                });

            }
        }else{
            errorMessage = "Request is null or empty.";
            return res.send({result : false, errorDesc : errorMessage});
        }
    });

// Login with username & password
router.post('/login', function (req, res){
    var errorMessage = "";
    if(typeof req !== 'undefined'){
        if(req.body.username !== null && req.body.username !== "" &&
            req.body.password !== null && req.body.password !== ""){

            return MemberModel.findOne({
                'username': req.body.username,
                'password': hashMD5(req.body.password)
            }).exec(function (err, user) {
                if (!err && user !== null) {
                    console.info('User success login ==> '+ req.body.username);
                    return res.send({result : true, user : user});
                } else {
                    console.error(err);
                    return res.send({result : false, errorDesc : 'Error when login '+ req.params.id});
                }
            });
        }else{
            errorMessage = "Failed getting parameter username or password.";
            return res.send({result : false, errorDesc : errorMessage});
        }
    }else{
        errorMessage = "Request is null or empty.";
        return res.send({result : false, errorDesc : errorMessage});
    }
});

router.route('/:id')

    // GET BY ID
    .get(function (req, res){
        return MemberModel.findById(req.params.id, function (err, member) {
            if (!err) {
                member.password = "";
                return res.send({result : true, member : member});
            } else {
                console.log(err);
                return res.send({result : false, errorDesc : 'error when get member '+ req.params.id});
            }
        });
    })

    // UPDATE DATA
    .put(function (req, res){
        return MemberModel.findById(req.params.id, function (err, member) {
            if(!req.body.username || !req.body.email){
                errorMessage = "Mandatory field can not be blank !";
                return res.send({result : false, errorDesc : errorMessage});
            }
            member.username = req.body.username;
            member.email = req.body.email;
            return member.save(function (err) {
                if (!err) {
                    console.log("product has been updated "+ req.params.id);
                    return res.send({result : true, product : product});
                } else {
                    console.log(err);
                    return res.send({result : false, errorDesc : 'error when update product '+ req.params.id});
                }
            });
        });
    })

    // DELETE DATA
    .delete(function (req, res){
        return MemberModel.findById(req.params.id, function (err, member) {
            return member.remove(function (err) {
                if (!err) {
                    console.log("member "+ req.params.id +" removed !");
                    return res.send({result : true, message : 'member '+ req.params.id +' has been removed'});
                } else {
                    console.log(err);
                    return res.send({result : false, errorDesc : 'error when remove member '+ req.params.id});
                }
            });
        });
    });


module.exports = router;