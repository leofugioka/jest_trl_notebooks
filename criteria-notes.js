[{"content":"","type":"text","id":"t5id2"},{"content":"import { render, screen } from '@testing-library/react';\nimport { useState } from 'react';\n\nfunction DataForm() {\n  const [email, setEmail] = useState('asdf@asdf.com');\n\n  return (\n    <form>\n      <h3>Enter Data</h3>\n\n      <div data-testid=\"image wrapper\">\n        <img alt=\"data\" src=\"data.jpg\" />\n      </div>\n\n      <label htmlFor=\"email\">Email</label>\n      <input\n        id=\"email\"\n        value={email}\n        onChange={(e) => setEmail(e.target.value)}\n      />\n\n      <label htmlFor=\"color\">Color</label>\n      <input id=\"color\" placeholder=\"Red\" />\n\n      <button title=\"Click when ready to submit\">Submit</button>\n    </form>\n  );\n}\n\nrender(<DataForm />);","type":"code","id":"kc3yi"},{"content":"test('selecting differente elements', () => {\n  render(<DataForm />);\n\n  const elements = [\n    screen.getByRole('button'),\n    screen.getByLabelText('Email'),\n    screen.getByPlaceholderText('Red'),\n    screen.getByText(/enter data/i),\n    screen.getByDisplayValue('asdf@asdf.com'),\n    screen.getByAltText('data'),\n    screen.getByTitle(/ready to submit/i),\n    screen.getByTestId('image wrapper')\n  ];\n\n  for (let element of elements) {\n    expect(element).toBeInTheDocument();\n  }\n});","type":"code","id":"yff2y"}]