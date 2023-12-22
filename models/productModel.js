import {Schema, models, model} from 'mongoose';

const productSchema = new Schema({
    Product:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    category:{
        type: String,
        required: true,
    },
    brand:{
        type: String,
        required: true,
    },
    quantity:{
        type: Number,
        required: true,
    },
    cost:{
        type: Number,
        required: true,
    },
    totalcost:{
        type: Number,
        required: true,
        default: function () {
            return this.cost * this.quantity;
        },
    },
    price:{
        type: Number,
        required: true,
    },
    totalprice:{
        type: Number,
        required: true,
        default: function () {
            return this.price * this.quantity;
        },
    },
    user:{
        type: Schema.Types.ObjectId,
        required: true,
        ref: "user",
    },
    createdAt: {
      type: Date,
      required: true,
    },
    updatedAt: {
      type: Date,
      required:true,
    },
});

const Product = models.Product || model("Product", productSchema);

export default Product;