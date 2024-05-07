import unittest
import majority_element

class Test_MajorityElementExample(unittest.TestCase):

    def test_(self):
        actual_result = majority_element.run(theArray=[2,2,1,1,1,2,2])
        self.assertEqual(actual_result, 2)

if __name__ == '__main__':
    unittest.main()