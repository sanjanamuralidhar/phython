
from flask import Flask,render_template,request
from data import Employeedata
app=Flask(__name__)
getEmployee=Employeedata()



@app.route('/')
def index():
    return render_template('home.html')
@app.route('/employeedata/')
def index5():
    return render_template('employee.html',emplo=getEmployee)


if(__name__=='__main__'):
    app.run(debug=True)