import { model, Schema } from "mongoose";

const productSchema = new Schema({
    title:{type:String,required:true},
    description:{type:String,required:true},
    price:{type:String,required:true},
    image:{type:String,reqired:true},
    unit:{type:Number,required:true}
},{
    timestamps:true,
}
);

const Product = model("Product",productSchema);
export default Product;