
// domain/.netlify/functions/hello

exports.handler = async (event, context) => {
    console.log('hello world');
    return {
        statusCode: 200,
        body: 'Hello world'
    }
}