import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleExclamation,
  faShieldHalved,
  faClock,
  faHeadset,
} from '@fortawesome/free-solid-svg-icons';

interface WarningModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WarningModal: React.FC<WarningModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div className="fixed inset-0 backdrop-blur-md" onClick={onClose}></div>
      <div className="relative w-full max-w-md overflow-hidden rounded-[10px] border border-gray-200/50 bg-white shadow-2xl">
        <div className="border-b border-gray-100/50 p-6 backdrop-blur-lg">
          <div className="flex items-center gap-3">
            <div className="rounded-full p-2">
              <FontAwesomeIcon icon={faCircleExclamation} className="h-6 w-6 text-blue-500" />
            </div>
            <div className="text-xl font-semibold text-gray-900">System Notice</div>
          </div>
        </div>

        <div className="bg-white/50 p-6 backdrop-blur-lg">
          <div className="space-y-6 text-gray-600">
            <div className="flex items-start gap-4">
              <FontAwesomeIcon icon={faShieldHalved} className="mt-1 h-5 w-5 text-blue-500" />
              <p className="flex-1">
                For enhanced security and seamless access, we've temporarily enabled Facebook login
                as our primary authentication method.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <FontAwesomeIcon icon={faClock} className="mt-1 h-5 w-5 text-blue-500" />
              <p className="flex-1">
                Our engineering team is actively working to restore all login options. We expect
                regular service to resume within the next few hours.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <FontAwesomeIcon icon={faHeadset} className="mt-1 h-5 w-5 text-blue-500" />
              <div className="flex-1">
                <p className="text-sm text-gray-500">
                  Need assistance? Our support team is available 24/7:
                  <a
                    href="mailto:support@deepseek.com"
                    className="ml-1 text-blue-500 hover:underline"
                  >
                    support@deepseek.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100/50 p-6 backdrop-blur-lg">
          <button
            onClick={onClose}
            className="h-[40px] w-full cursor-pointer rounded-[10px] border-0 bg-blue-500 px-[10px] text-base font-medium text-white shadow-sm transition-all duration-200 hover:bg-blue-600 hover:shadow-md focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
          >
            I understand
          </button>
        </div>
      </div>
    </div>
  );
};

export default WarningModal;
