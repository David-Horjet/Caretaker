
// const {initializePayment, verifyPayment} = require('../../utils/paystack')(request);

// const {Payment} = require('../../model/paystack')


// const initializePaymentOnline = async((req, res) => {
//     const body = req.body;
//     const formDetails = ({amount: body.amount,email: body.email,fullname: body.fullname})
//     // const form = _.pick(req.body,['amount','email','full_name']);
//     // form.metadata = {
//     //     full_name : form.full_name
//     // }
//     // form.amount *= 100;
//     formDetails.amount *= 100;
    
//     // initializePayment(form, (error, body)=>{
//     //     if(error){
//     //         //handle errors
//     //         console.log(error);
//     //         return res.redirect('/error')
//     //         return;
//     //     }
//     //     response = JSON.parse(body);
//     //     res.redirect(response.data.authorization_url)
//     // });
// });

// const verifyPaymentOnline = async( (req,res) => {
//     const ref = req.query.reference;
//     verifyPayment(ref, (error,body)=>{
//         if(error){
//             //handle errors appropriately
//             console.log(error)
//             return res.redirect('/error');
//         }
//         response = JSON.parse(body);        

//         const data = _.at(response.data, ['reference', 'amount','customer.email', 'metadata.full_name']);

//         [reference, amount, email, full_name] =  data;
        
//         newDonor = {reference, amount, email, full_name}

//         const donor = new Donor(newDonor)

//         donor.save().then((donor)=>{
//             if(!donor){
//                 return res.redirect('/error');
//             }
//             res.redirect('/receipt/'+donor._id);
//         }).catch((e)=>{
//             res.redirect('/error');
//         })
//     })
// });

// const paymentReceipt = async ((req, res)=>{
//     const id = req.params.id;
//     Donor.findById(id).then((donor)=>{
//         if(!donor){
//             //handle error when the donor is not found
//             res.redirect('/error')
//         }
//         res.render('success.pug',{donor});
//     }).catch((e)=>{
//         res.redirect('/error')
//     })
// })

// const payment = async(req,res)=>{
//     try {
//         // const form = _.pick(req.body,['amount','email','fullname']);
//         const body = req.body;
//         const formDetails = ({amount: body.amount,email: body.email,fullname: body.fullname})
//         // form.metadata = {
//         //     fullname : form.fullname
//         // }
//         formDetails = {
          
//         }
//       //   form.amount *= 100;
//       formDetails.amount *= 100;
//         initializePayment(formDetails, (error, result)=>{
//             if(error){
//                 //handle errors
//                 console.log(error);
//                 return;
//             }
//             response = JSON.parse(result);
//             res.redirect(response.data.authorization_url)
//         });
//     } catch (error) {
  
//         return res.status(500).json({
//         status: false,
//         message: `You've got some errors`,
//         error
//       });
//     }
  
//   }

// module.exports = {
//     initializePaymentOnline,
//     verifyPaymentOnline,
//     paymentReceipt
// }

