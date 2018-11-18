const keystone = require('keystone');
const Event = keystone.List('Event');

module.exports = function(req, res){
  console.log("entered the function");

  const data = Object.assign({}, req.body);

  if(!data.name || !data.startTime || !data.endTime){
      return res.send({ status: 'incomplete data set!'} );
  }

  const newEvent = new Event.model();


  Event.updateItem(newEvent, data, function(error){
      res.locals.submitted = true;
      if(error) res.locals.isError = true;
      res.render('addEvent');
  });
};