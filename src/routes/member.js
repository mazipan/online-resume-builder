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
                var passHash = hashMD5(hashMD5(req.body.password));
                member = new MemberModel({
                    username: req.body.username,
                    email: req.body.email,
                    password: passHash,
                    created: Date.now
                });

                member.save(function (err) {
                    if (!err) {
                        console.log("member : "+product.email + " has been created ");
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