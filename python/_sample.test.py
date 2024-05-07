import unittest
import _sample

class Test_ProductionCodeCoverageExample(unittest.TestCase):

    def test_sum_two_numbers___when_given_2_and_5___returns_7(self):
        actual_result = _sample.sum_two_numbers(2, 5)
        self.assertEqual(actual_result, 7)

    def test_subtract_two_numbers___when_given_9_and_3___returns_6(self):
        actual_result = _sample.subtract_two_numbers(9, 3)
        self.assertEqual(actual_result, 6)

    def test_add_four___when_given_2__return_6(self):
        
        # Act
        actual_result = _sample.add_four(2)
        # Assert
        self.assertEqual(actual_result, 6)

if __name__ == '__main__':
    unittest.main()