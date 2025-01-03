import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import { Send } from "lucide-react";
import { Button } from "./ui/button";

const InputField = ({ name, label, value, onChange, error }) => (
  <div>
    <CardHeader className="p-0">{label}</CardHeader>
    <Input name={name} placeholder={`Enter ${label}`} value={value} onChange={onChange} />
    {error && <p className="text-red-500 text-sm">{error}</p>}
  </div>
);

function UpiPayment() {
  const [formData, setFormData] = useState({
    name: "", mobile: "", pancard: "", address: "", city: "", state: "", pincode: "",
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if ((name === "mobile" || name === "pincode") && !/^\d*$/.test(value)) return;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    const fields = ["name", "mobile", "pancard", "address", "city", "state", "pincode"];
    fields.forEach((field) => {
      if (!formData[field]) newErrors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
      if (field === "mobile" && formData.mobile.length !== 10) newErrors.mobile = "Mobile number must be 10 digits";
      if (field === "pincode" && formData.pincode.length !== 6) newErrors.pincode = "PIN code must be 6 digits";
    });
    if (Object.keys(newErrors).length > 0) setErrors(newErrors);
    else {
      alert("Form submitted successfully!");
      console.log("Form Data:", formData);  // Yeh line add kari gayi hai
    }
  };
  

  return (
    <div className="p-4 md:p-10">
      <Card className="w-full mx-auto shadow-lg">
        <CardTitle className="text-center text-lg font-semibold">Create VPA</CardTitle>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {["name", "mobile", "pancard"].map((field) => (
                <InputField key={field} name={field} label={field.charAt(0).toUpperCase() + field.slice(1)} value={formData[field]} onChange={handleInputChange} error={errors[field]} />
              ))}
            </div>
            <InputField name="address" label="Address" value={formData.address} onChange={handleInputChange} error={errors.address} />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              {["city", "state", "pincode"].map((field) => (
                <InputField key={field} name={field} label={field.charAt(0).toUpperCase() + field.slice(1)} value={formData[field]} onChange={handleInputChange} error={errors[field]} />
              ))}
            </div>
            <Separator />
            <div>
              <Button type="submit" className="w-full mt-5 py-2 text-lg font-semibold">
                <Send size="16" className="ml-2" />
                PROCEED TO ONBOARD
              </Button>
            </div>

          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default UpiPayment;
