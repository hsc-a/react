const path=require("path");
module.exports={
    mode:"development",
    entry:
        './src/index.js',
        
   
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"main.js"
    },
    devServer:{
      contentBase:path.join(__dirname,'dist')
      //devServer.contentBase配置DevServer HTTP服务器的文件根目录。默认情况下为当前执行目录，所以一般不必设置它，除非有额外的文件需要被DevServer服务。例如你想把项目根目录下的public目录设置成DevServer服务器的文件根目录：
    },
    
      module:{
        rules:[ {test:/\.css$/,loader:"style-loader!css-loader"},
         {test: /\.(gif|jpg|png)$/, loader: "url-loader?limit=8192&name=images/[hash:8].[name].[ext]"},
      {
        test:/\.m?js$/,
        exclude:/(node_modules|bower_components)/,
        use:{
          loader:'babel-loader',
          options:{
            presets:['@babel/preset-env',"@babel/react"]
          }
        }
      },]
      }
  
}